import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Board from "./pages/Board";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/board"
        element={
          <PrivateRoute>
            <Board />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
