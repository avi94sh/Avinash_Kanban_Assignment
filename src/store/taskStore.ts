import { create } from "zustand";
import { mockApiCall } from "../api/mockApi";

export type ColumnType = "todo" | "inprogress" | "done";

export type Task = {
  id: string;
  title: string;
  column: ColumnType;
};

type Store = {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  moveTask: (id: string, column: ColumnType) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
};

export const useTaskStore = create<Store>((set, get) => ({
  tasks: [],

  addTask: async (title) => {
    const snapshot = get().tasks;
    const newTask = { id: crypto.randomUUID(), title, column: "todo" };
    set({ tasks: [...snapshot, newTask] }); // optimistic update

    try {
      await mockApiCall();
    } catch {
      set({ tasks: snapshot }); // rollback on failure
      throw new Error("Failed to add task");
    }
  },

  moveTask: async (id, column) => {
    const snapshot = get().tasks;
    const updated = snapshot.map((t) => (t.id === id ? { ...t, column } : t));
    set({ tasks: updated }); // optimistic update

    try {
      await mockApiCall();
    } catch {
      set({ tasks: snapshot }); // rollback
      throw new Error("Failed to move task");
    }
  },

  deleteTask: async (id) => {
    const snapshot = get().tasks;
    set({ tasks: snapshot.filter((t) => t.id !== id) }); // optimistic

    try {
      await mockApiCall();
    } catch {
      set({ tasks: snapshot }); // rollback
      throw new Error("Failed to delete task");
    }
  },
}));
