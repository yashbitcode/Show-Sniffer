# Show Sniffer

**Show Sniffer** is a modern web app that allows users to explore movies, TV series, and people in the entertainment industry. With advanced search capabilities, bookmarking features, and an AI-powered recommendation system, users can easily discover and save content tailored to their preferences.

This project was built as part of a **Frontend Mentor challenge**, with extended features and real-world functionality integrated using third-party APIs and services.

---

## 🌐 Live Demo

Check out the live app here: [Show Sniffer Demo](https://show-sniffer.vercel.app/)

---

## 🔍 Features

- **Search Anything**: Find detailed information about movies, TV shows, and people using the TMDB API.
- **AI Recommendations**: Describe a genre, mood, or scenario and get intelligent suggestions powered by Gemini AI.
- **Bookmarking**: Save movies, series, or people for later. Bookmarked items are synced to your account via Appwrite.
- **AI Search History**: All AI prompts and their results are stored for future reference.
- **Authentication**: Secure sign-up and login using Clerk.

---

## ⚙️ Tech Stack

- **Frontend Framework**: [Vite + React](https://vitejs.dev/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database & Storage**: [Appwrite](https://appwrite.io/)
- **AI Integration**: [Gemini API (Google)](https://aistudio.google.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux](https://redux.js.org/)
- **Data Fetching & Caching**: [React Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/guide/)
- **Routing**: [React Router](https://reactrouter.com/)

---

## 📁 Project Structure

```bash
ShowSniffer/
├── api/                     # api calling using vercel serverless functions
├── src/
│   ├── appwrite/            # appwrite services
│   ├── assets/              # project assets
│   ├── components/          # Reusable UI components
│   ├── conf/                # Conf file for services to access env. variables
│   ├── pages/               # Route-specific pages
│   ├── utils/               # Required utilities (contants, helper functions etc)
│       ├── hooks/               # Custom hooks
│       ├── services/            # redux slices and gemini fetching code
│   └── App.jsx              # App layout component
│   └── main.jsx             # ----
├── public/
├── .env                     # Environment variables
├── vercel.json              # Vercel rewrites
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/yashbitcode/Show-Sniffer.git
cd Show-Sniffer
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file and add the following:
```env
API_KEY=tmdb_api_key
VITE_CLERK_PUBLISHABLE_KEY=clerk_publishable_key
VITE_APPWRITE_PROJECT_ID=appwrite_project_id
VITE_APPWRITE_DATABASE_ID=appwrite_db_id
VITE_APPWRITE_BOOKMARKS_COLLECTION_ID=appwrite_bookmark_collection_id
VITE_APPWRITE_AI_SEARCHES_COLLECTION_ID=appwrite_ai_searches_collection_id
VITE_GEMINI_KEY=gemini_api_key
```

4. **Run the app**
```bash
npm run dev
```

---

## 📌 Key Highlights

- Efficient data fetching using **React Query**
- Global state handled with **Redux**
- Persistent user data using **Appwrite**
- Clean, modular component structure
- Smooth user experience with **Tailwind CSS** and **Shadcn UI**
- Scalable and extendable architecture

---

## 🙌 Contribution

Pull requests are welcome! If you'd like to improve the UI, add features, or fix bugs, feel free to fork the repo and submit a PR.

---

## 📃 License

This project is licensed under the MIT License.