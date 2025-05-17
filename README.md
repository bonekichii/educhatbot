# EduChatBot

EduChatBot is a minimalist AI-powered educational video chatbot built with a **Node.js backend** and a **vanilla HTML/JS frontend**. It uses the **YouTube Data API** to fetch relevant videos based on user queries. Designed for learners and educators, it offers a clean and responsive interface to make video learning seamless.

---

## ✅ Features

- Ask any educational question and get relevant YouTube video results  
- Save videos to a ⭐ “Watch Later” list with thumbnails  
- Persistent chat and watch history using `localStorage`  
- Toggle between light and dark mode  
- Download chat history as a `.txt` file  
- Fully responsive for mobile and desktop  
- Backend securely handles API key (never exposed to frontend)

---

## 📁 Folder Structure

```
educhatbot/
├── backend/                # Node.js backend
│   ├── server.js
│   ├── .env
│   ├── .env.example
│   └── package.json
├── frontend/               # Static frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/educhatbot.git
cd educhatbot
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

#### 🔑 Create a `.env` file:

```env
YOUTUBE_API_KEY=your_youtube_api_key_here
```

> Never commit your `.env` file. Use `.env.example` as a safe template.

#### ▶️ Run the backend:

```bash
node server.js
```

- The backend runs at: `http://localhost:5000`

---

### 3. Setup Frontend

You can open the file directly in a browser:

```bash
frontend/index.html
```

Or run a local server:

```bash
cd frontend
python -m http.server 8080
```

- Access it at: `http://localhost:8080`

---

## 📝 Notes

- This project uses the [YouTube Data API](https://developers.google.com/youtube/v3)  
- All chat and watch-later data is stored locally using `localStorage`  
- Designed to be minimal, extendable, and easy to understand  
- You can enhance it with Firebase, database, authentication, etc.

---

## 🚫 .gitignore Example

```gitignore
node_modules/
.env
.DS_Store
Thumbs.db
```

---

## 📄 .env.example

```env
YOUTUBE_API_KEY=your_youtube_api_key_here
```

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Please open an issue to discuss any big ideas before submitting a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

##  Author

**Vega**  
Project: EduChatBot  
GitHub: [https://github.com/bonekichii/educhatbot](https://github.com/bonekichii/educhatbot)
