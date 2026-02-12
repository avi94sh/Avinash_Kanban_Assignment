import { useState } from "react";
import { useTaskStore, ColumnType } from "../store/taskStore";
import { DndContext, DragEndEvent, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function DraggableTask({ id, title, onDelete }: { id: string; title: string; onDelete: () => void }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-gray-100 p-3 rounded flex justify-between items-center cursor-grab"
    >
      <span>{title}</span>
      <button onClick={onDelete} className="text-red-500 text-sm ml-2">✕</button>
    </div>
  );
}

function DroppableColumn({ id, label, children }: { id: ColumnType; label: string; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="bg-white rounded-lg shadow p-4 w-80 min-h-[300px]">
      <h2 className="font-semibold mb-4">{label}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export default function Board() {
  const { tasks, addTask, moveTask, deleteTask } = useTaskStore();
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    try {
      await addTask(title);
      setTitle("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    try {
      await moveTask(active.id as string, over.id as ColumnType);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-2xl font-bold mb-6">Kanban Board</h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
          className="border p-2 rounded w-64"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded">Add</button>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-6">
          {(["todo", "inprogress", "done"] as ColumnType[]).map((col) => (
            <DroppableColumn
              key={col}
              id={col}
              label={col === "todo" ? "To Do" : col === "inprogress" ? "In Progress" : "Done"}
            >
              {tasks.filter((t) => t.column === col).map((task) => (
                <DraggableTask
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  onDelete={async () => {
                    try { await deleteTask(task.id); } catch (err: any) { alert(err.message); }
                  }}
                />
              ))}
            </DroppableColumn>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
