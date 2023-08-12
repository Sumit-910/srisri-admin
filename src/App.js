import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import User from './pages/singleUser/User';

import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path='/login' element={count? <Navigate to="/" /> : <Login setCount={setCount} />} />
        <Route path="/" element={count? <Dashboard setCount={setCount} /> : <Navigate to="/login" />} />
        <Route path="/:userid" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
