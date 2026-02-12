# Kanban Board - Avinash Assignment

This is a **Kanban Board web app** built with **React, TypeScript, Zustand, Tailwind CSS, and DnD Kit**. It allows users to:

- Add tasks
- Move tasks between columns (To Do, In Progress, Done)
- Delete tasks
- Persist login using `localStorage`

---

## Features

- **Drag and Drop:** Move tasks between columns using @dnd-kit.
- **State Management:** Tasks are managed using Zustand.
- **Login:** Simple login to simulate user authentication.
- **Responsive Design:** Built with Tailwind CSS.
- **Optimistic Updates:** Tasks update instantly, rollback on failure (mock API).

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

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/Avinash_Kanban_Assignment.git


Navigate to the project folder:

cd Avinash_Kanban_Assignment


Install dependencies:

npm install

Usage

Start the development server:

npm run dev


Open the app in your browser:

http://localhost:5173/
Login with any username, then you can:

Add a new task in the "To Do" column

Drag and drop tasks between columns

Delete tasks using the ✕ button

Scripts

npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

Dependencies

React - UI Library

TypeScript - Type safety

Tailwind CSS - Styling

Zustand - State management

@dnd-kit/core - Drag & Drop functionality

Notes

This project is not deployed online. You can run it locally using npm run dev.

Tasks are stored in memory and reset on page refresh.

Login is simulated using localStorage.

Author

Avinash Chauhan
Assignment: Kanban Board Project


---

If you want, I can also **make a shorter, one-page version** that’s perfect for **GitHub submission**, with a screenshot of your board included in the README.  

Do you want me to do that next?
