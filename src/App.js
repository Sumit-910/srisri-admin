import Dashboard from "./pages/dashboard/Dashboard";
import User from './pages/singleUser/User';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
      <Route path="/:userid" element={<User />} />
    </Routes>
    </>
  );
}

export default App;
