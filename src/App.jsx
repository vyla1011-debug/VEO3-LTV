// src/App.jsx

import React, { useState } from "react";
import { characters, scenePresets, voicePresets } from "./presets";
import { buildVeoPrompt } from "./buildPrompt";

function App() {
  const [characterKey, setCharacterKey] = useState("chiLan");
  const [sceneKey, setSceneKey] = useState("lanHouse");
  const [voiceKey, setVoiceKey] = useState("chiLan_mientay");

  const [dialogueVi, setDialogueVi] = useState("");
  const [extraNote, setExtraNote] = useState("");

  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  function isDialogueTooLong(text) {
    return text.trim().split(" ").length > 22;
  }

  const handleGenerate = () => {
    if (!dialogueVi.trim()) {
      setError("Bạn chưa nhập thoại!");
      return;
    }

    if (isDialogueTooLong(dialogueVi)) {
      setError("Thoại quá dài! Giữ dưới 8 giây (~18–20 từ).");
      return;
    }

    try {
      setError("");
      const p = buildVeoPrompt({
        characterKey,
        sceneKey,
        voiceKey,
        dialogueVi,
        extraNote
      });
      setPrompt(p);
    } catch (e) {
      setError("Có lỗi: " + e.message);
    }
  };

  const handleCopy = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    alert("Đã copy prompt!");
  };

  const combos = [
    { name: "Mi Đen – Sân trường", char: "miDen", scene: "schoolYard", voice: "miDenVoice" },
    { name: "Tuấn Rụng – Sân trường", char: "tuanRung", scene: "schoolYard", voice: "tuanRungVoice" },
    { name: "Chị Lan – Nhà Chị Lan", char: "chiLan", scene: "lanHouse", voice: "chiLan_mientay" }
  ];

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>VEO3 AUTO PROMPT – Tầng 1</h1>

      <p>Nhập thoại → chọn nhân vật → tool tự tạo prompt chuẩn Veo 3 (8 giây).</p>

      <div style={{ marginBottom: 12 }}>
        <b>Combo nhanh:</b><br/>
        {combos.map((c, idx) => (
          <button
            key={idx}
            style={{ margin: 6 }}
            onClick={() => {
              setCharacterKey(c.char);
              setSceneKey(c.scene);
              setVoiceKey(c.voice);
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      <label>
        Nhân vật:
        <select value={characterKey} onChange={e => setCharacterKey(e.target.value)}>
          {Object.entries(characters).map(([key, cfg]) => (
            <option key={key} value={key}>{cfg.name}</option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: 10 }}>
        Bối cảnh:
        <select value={sceneKey} onChange={e => setSceneKey(e.target.value)}>
          {Object.keys(scenePresets).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: 10 }}>
        Giọng:
        <select value={voiceKey} onChange={e => setVoiceKey(e.target.value)}>
          {Object.keys(voicePresets).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: 20 }}>
        <textarea
          value={dialogueVi}
          onChange={e => setDialogueVi(e.target.value)}
          rows={3}
          style={{ width: "100%" }}
          placeholder="Nhập thoại tiếng Việt (< 8 giây)…"
        />
      </div>

      <input
        type="text"
        value={extraNote}
        onChange={e => setExtraNote(e.target.value)}
        placeholder="Ghi chú thêm (optional)…"
        style={{ width: "100%", marginTop: 8 }}
      />

      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}

      <button style={{ marginTop: 12 }} onClick={handleGenerate}>
        Tạo Prompt
      </button>

      <div style={{ marginTop: 20 }}>
        <textarea
          value={prompt}
          readOnly
          rows={15}
          style={{ width: "100%", fontFamily: "monospace" }}
        />
      </div>

      <button onClick={handleCopy} disabled={!prompt}>
        Copy Prompt
      </button>
    </div>
  );
}

export default App;
