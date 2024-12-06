import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
