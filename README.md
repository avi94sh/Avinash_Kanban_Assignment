# Kanban Board - Avinash Assignment

A **Kanban Board web app** built with **React, TypeScript, Zustand, Tailwind CSS, and DnD Kit**.

Manage tasks with drag-and-drop, simple login, and responsive design.

---

## Features

- **Add / Delete Tasks** in columns: To Do, In Progress, Done  
- **Drag & Drop** tasks between columns (@dnd-kit)  
- **State Management** with Zustand  
- **Login Simulation** using localStorage  
- **Responsive Design** with Tailwind CSS  
- **Optimistic Updates** with mock API  

---

## Folder Structure

Avinash_Assignment/
├─ node_modules/
├─ public/
├─ src/
│ ├─ api/
│ │ └─ mockApi.ts
│ ├─ assets/
│ ├─ pages/
│ │ ├─ Board.tsx
│ │ └─ Login.tsx
│ ├─ store/
│ │ └─ taskStore.ts
│ ├─ App.tsx
│ ├─ index.css
│ └─ main.tsx
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md


---

## Installation & Usage (One Command)

```bash
# Clone repo, install dependencies, and start server
git clone https://github.com/<your-username>/Avinash_Kanban_Assignment.git && \
cd Avinash_Kanban_Assignment && \
npm install && \
npm run dev
Open http://localhost:5173 in your browser.
Login with any username and start managing tasks.

Scripts
npm run dev – Start development server

npm run build – Build for production

npm run preview – Preview production build

Dependencies
React – UI Library

TypeScript – Type safety

Tailwind CSS – Styling

Zustand – State management

@dnd-kit/core – Drag & Drop functionality

Notes
Project runs locally using npm run dev
