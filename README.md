# Kanban Board Assignment - Avinash Chauhan



## Features
- Add new task
- Delete task
- Drag & drop tasks between columns
- Optimistic UI updates with rollback on API failure
- Mock API with latency and 20% random failures

## Tech Stack
- React 19 + TypeScript
- Zustand (state management)
- Tailwind CSS
- @dnd-kit/core for drag & drop
- Vite

## How to run locally
1. Clone repo: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Open: `http://localhost:5173/`

## Optimistic UI Approach
- UI updates instantly when adding/moving/deleting a task
- If API fails (20% random chance), the state rolls back
- Error notification shown using `alert()`

## Decisions & Trade-offs
- Zustand for simple state & optimistic updates
- @dnd-kit/core instead of heavier libraries
- Tailwind for clean responsive styling
- Mock API simulates backend latency
