// src/buildPrompt.js
import { characters, scenePresets, voicePresets } from "./presets";

export function buildVeoPrompt({
  characterKey,
  sceneKey,
  voiceKey,
  dialogueVi,
  extraNote = ""
}) {
  const charCfg = characters[characterKey];
  const scene = scenePresets[sceneKey];
  const voice = voicePresets[voiceKey];

  if (!charCfg) throw new Error("Sai characterKey");
  if (!scene) throw new Error("Sai sceneKey");
  if (!voice) throw new Error("Sai voiceKey");

  const noteText = extraNote ? `Extra direction: ${extraNote}
` : "";

  return `
Cinematic 8-second video for Veo 3.

Character:
${charCfg.name}
${charCfg.description}

Scene:
${scene}

Action:
Character speaks Vietnamese dialogue.
Show the Vietnamese dialogue as subtitles only.
Do NOT translate. Use exactly the given text.

Subtitles:
"${dialogueVi}"

Voice:
${voice}

Camera:
Medium shot, eye-level, smooth, stable.

Lighting:
Natural, soft, realistic.

Style:
Realistic, smooth animation, expressive but not exaggerated.

${noteText}
  `.trim();
}
