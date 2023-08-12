import './login.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setCount}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const handleonChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
      }
      const login = (e) => {
        e.preventDefault();
        if(user.username==="admin" && user.password==="iamadmin"){
            setCount(1);
            navigate("/");
        }
        else{
            window.alert("Wrong Credentials!");
        }
      }
  return (
    <>
      <div className="login">
      <div className="form">
        <h2>LOGIN</h2>
        <input type="text" name="username" value={user.username} onChange={(e) => { handleonChange(e) }} placeholder="Enter Username" />
        <input type="password" name="password" value={user.password} onChange={(e) => { handleonChange(e) }} placeholder="Enter Password" />
        <button type="submit" className="btn" onClick={login} >Login</button>
      </div>
      </div>
    </>
  )
}

export default Login
