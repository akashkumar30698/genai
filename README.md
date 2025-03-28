# Gen AI Analytics - Data Query Dashboard

## 🚀 Overview
This is a **React-based Data Query Dashboard Prototype** for the **Gen AI Analytics Tool**, which allows users to interact with data using natural language queries. The dashboard simulates AI-powered query processing and visualizes results in an intuitive format.

## 🎯 Features
- 📝 **Natural Language Query Input** with AI-powered suggestions
- 📜 **Query History** for quick access to past queries
- 📊 **Results Visualization** with mock data (Recharts)
- ⏳ **Loading & Error States** for better UX
- 🌍 **Global State Management** using Redux
- 🎨 **Responsive UI** powered by Tailwind CSS

## 🛠 Tech Stack
- **Frontend:** React.js (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Deployment:** Vercel 

## 🏗️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/akashkumar30698/genai.git
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── QueryInput.jsx
│   │   ├── QueryHistory.jsx
│   │   ├── ResultDisplay.jsx
│   ├── redux
│   │   ├── store.js
│   │   ├── querySlice.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── public
├── package.json
└── README.md
```

## 🚀 Deployment
- **Live Demo:** [Click Here](https://genai-lac-seven.vercel.app)
- **GitHub Repo:** [Click Here](https://github.com/akashkumar30698/genai)

## 🎯 Approach & Thought Process
1. **Component-Driven Development:** Separated the UI into independent, reusable components.
2. **Redux for State Management:** Used Redux Toolkit to handle query submission, loading, and results.
3. **Mock AI Interaction:** Simulated AI responses and query suggestions.
4. **Recharts for Visualization:** Integrated a simple bar chart to display query results.
5. **Responsive & Minimal UI:** Ensured a clean, user-friendly experience using Tailwind CSS.

## 📜 Future Enhancements
- Integrate a backend for real AI query processing.
- Improve AI-powered query suggestions.
- Add more visualization types.



## 📄 License
This project is **open-source** and available under the MIT License.

---


