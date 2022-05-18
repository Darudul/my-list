import Navbar from "./Navbar";
import { Route, Routes } from "react-router";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<TodoList></TodoList>}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/login" element={<SocialLogin></SocialLogin>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
