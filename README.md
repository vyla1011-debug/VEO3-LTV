# VEO3 Auto – Automated Script Generator & Video Workflow

VEO3 Auto is a tool designed to automate the process of generating consistent AI scripts, prompts, and workflow sequences for video creation using VEO3 or similar video-generation platforms.

This project helps:
- Create consistent scripts for characters
- Auto-generate prompts for VEO3 (≤ 8 seconds per prompt)
- Auto-build storyline episodes
- Export prompt + script files for use on iPhone
- Maintain character continuity (Luma, Capybara, Chị Lan…)
- Automate repetitive steps in video production

---

## 🚀 Features

### ✔ Auto Prompt Generator  
Automatically creates English prompts for VEO3 including:
- Character appearance  
- Camera angle  
- Background  
- Acting style  
- Voice tone  

### ✔ Auto Scene Builder  
Generates multiple scenes for episodes (Tập 1, Tập 2, …).

### ✔ Character Consistency  
Uses predefined settings:
- Luma canonical look  
- Capybara trắng  
- Chị Lan’s house setup  
- Short <8s VEO3 style dialogue  

### ✔ iPhone-Friendly Output  
Creates ready-to-copy prompts optimized for mobile workflow.

### ✔ Script Export  
Outputs `.txt` or `.json` script files for direct import.

---

## 📁 Project Structure

```
/.github         - GitHub workflows
/build           - Compiled build files
/public          - Static assets
/src             - Source code for prompt/script generator
package.json     - Project configuration and modules
README_build.txt - Build instructions
```

---

## 🔧 Installation

### 1. Install Node.js  
Download from: https://nodejs.org

### 2. Install dependencies  
In the project folder:

```
npm install
```

---

## ▶️ Usage

### Run the generator:

```
npm run start
```

OR

```
node src/index.js
```

### Output:
- Generated prompts  
- AI scripts  
- Episode storyline  
- Export files inside `/build`

---

## 📱 Workflow Example (iPhone)

1. Generate script  
2. Copy prompt  
3. Paste into VEO3  
4. Adjust scene  
5. Save video  
6. Upload to TikTok / YouTube  

---

## 📌 Notes

- Each VEO3 script is limited to ≤8 seconds
- User dialogue must remain unchanged
- English prompts only
- Character designs follow predefined style
- Tool is optimized for “Auto Video Prompt” workflow

---

## ✨ Author
Created by **vyla1011-debug**

---

## 📄 License
MIT License – free to use, modify, or distribute.
