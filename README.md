# 🎨 Personal Portfolio Website

A modern, responsive personal portfolio website built with a **React** (Vite) frontend and a **FastAPI** (Python) backend. Designed to showcase projects, skills, and resume with a premium, glassmorphism-inspired UI.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Live Demo

[https://portfolio-frontend-jptb.onrender.com/](https://portfolio-frontend-jptb.onrender.com/)

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite**
- **Framer Motion** (Animations)
- **Vanilla CSS** (Custom Properties, Glassmorphism, Dark Theme)
- **React Icons** & **Axios**

### Backend
- **FastAPI** (Python 3.9)
- **FastAPI-Mail** (Email handling)
- **Pydantic** (Validation)
- **Uvicorn** (ASGI Server)

### Deployment
- **Render** (Monorepo: Static Site + Web Service)

## ✨ Features

- **Floating Glass Navbar**: Smooth scrolling and responsive mobile menu.
- **Hero Section**: Dynamic intro with floating profile avatar.
- **Interactive Projects**: Glass cards with hover effects and direct GitHub links.
- **Skills Grid**: Visual representation of technical expertise.
- **Contact Form**: Functional email sender integrated with Gmail SMTP.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.

## 📂 Project Structure

```bash
Portfolio/
├── frontend/          # React Application
│   ├── src/           # Components, Pages, CSS
│   └── package.json   # Frontend dependencies
├── backend/           # FastAPI Application
│   ├── routes/        # API endpoints
│   ├── main.py        # App entry point
│   └── requirements.txt # Backend dependencies
└── render.yaml        # Deployment Blueprint
```

## ⚙️ Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/aadityaraj2532/Portfolio.git
cd Portfolio
```

### 2. Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Create .env file
echo "MAIL_USERNAME=your_email@gmail.com" > .env
echo "MAIL_PASSWORD=your_app_password" >> .env
echo "MAIL_FROM=your_email@gmail.com" >> .env
echo "MAIL_PORT=587" >> .env
echo "MAIL_SERVER=smtp.gmail.com" >> .env

# Run Server
uvicorn main:app --reload
```
*Backend runs on `http://localhost:8000`*

### 3. Setup Frontend
```bash
cd ../frontend
npm install

# Run Dev Server
npm run dev
```
*Frontend runs on `http://localhost:5173`*

## 🚀 Deployment

This project conforms to **Render Blueprints**.
1. Push code to GitHub.
2. Create a new **Blueprint** on Render.
3. Connect this repository.
4. Render will auto-detect `render.yaml` and deploy both services.
5. **Post-Deploy:** Update `VITE_API_URL` in the Frontend service environment to point to your live Backend URL.

## 📬 Contact

**Aaditya Raj**  
- GitHub: [@aadityaraj2532](https://github.com/aadityaraj2532)
- Email: adityajnvbanka15@gmail.com
