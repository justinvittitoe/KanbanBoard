# 🧩 React + Node Kanban Board with JWT Authentication

A full-stack Kanban Board application with secure **JWT-based authentication**. Built with **React, TypeScript, Express, and PostgreSQL**, this app allows authenticated users to view, manage, and track tasks across multiple status columns in a classic Kanban workflow.

> Developed by [justinvittitoe](https://github.com/justinvittitoe)

---

## 📌 Project Overview

Authentication with **JSON Web Tokens (JWT)** is crucial for modern applications. This Kanban board securely verifies user credentials, manages token-based sessions, and protects API access. Users are redirected appropriately based on authentication status, and tokens are securely stored and managed in the client.

---

## 🔐 Key Authentication Features

- Secure login with JWT
- Tokens stored in client-side `localStorage`
- Token verification on protected routes
- Automatic logout on inactivity or token expiry
- Redirects for unauthenticated users
- Logout functionality clears session and token

---

## 💻 Tech Stack

**Frontend:**
- React + TypeScript
- React Router
- Axios for API requests

**Backend:**
- Node.js + Express
- TypeScript
- PostgreSQL
- bcrypt for password hashing
- jsonwebtoken for JWTs

**Deployment:**
- Render (Frontend as Static Site + Backend as Web Service)
- PostgreSQL (via Render or external host)

---

### 🔧 1. Environment Variables

Create a `.env` file in both `/client` and `/server`.

#### `server/.env`

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=kanban_db
JWT_SECRET=your_jwt_secret
PORT=3001
```

## Author
Justin Vittitoe
GitHub: @justinvittitoe

## Deployed Site

https://kanbanboard-09iz.onrender.com/

### login
username: JollyGuru
password: password