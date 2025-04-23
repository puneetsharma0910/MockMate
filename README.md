# 🧠 MockMate

MockMate is an AI-powered mock interview platform built to help candidates practice real-world interviews in a fully interactive environment. Leveraging the power of Vapi AI and Google Gemini, MockMate delivers voice-driven interviews, feedback, and preparation tools – all from your browser.

## 🚀 Live Demo

[🔗 View Live](https://mock-mate-pi.vercel.app/)

---

## 📸 Screenshots

![Dashboard Preview](./public/screenshot-dashboard.png)
![Interview Room](./public/screenshot-interview.png)

---

## 📦 Features

- 🎤 **AI Voice Interviews** – Realistic mock interviews powered by Vapi AI.
- 💬 **Gemini AI Feedback** – Personalized insights and improvement tips.
- 🔐 **Authentication** – Sign in securely using Firebase auth.
- 🧭 **Dashboard** – Track progress, manage interviews, and view feedback.
- 🌓 **Dark Mode Support** – Fully responsive and theme-ready.
- ⚙️ **Developer-Friendly Codebase** – Modular and scalable with clean UI.

---

## 🛠 Tech Stack

**Frontend**
- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)

**Backend & APIs**
- [Firebase](https://firebase.google.com/)
- [Vapi AI](https://vapi.ai/)
- [Google Gemini](https://deepmind.google/technologies/gemini)

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/puneetsharma0910/MockMate.git
cd MockMate
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Create Environment File

```bash
touch .env.local
```

### 4. Add Environment Variables

Paste the following into `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

VAPI_API_KEY=your_vapi_ai_key
GEMINI_API_KEY=your_google_gemini_key
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit the app at: [http://localhost:3000](http://localhost:3000)


# Visit the app at:
 http://localhost:3000

