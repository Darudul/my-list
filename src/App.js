import Navbar from "./Navbar";
import { Route, Routes } from "react-router";
import "./App.css";
import TodoList from "./TodoList";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <TodoList></TodoList>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
