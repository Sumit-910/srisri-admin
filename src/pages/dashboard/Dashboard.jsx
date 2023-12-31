import './dashboard.css';

import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

const Dashboard = ({setCount}) => {
    const [userDetails, setUserDetails] = useState([]);
    const userCollection = collection(db, "users");
    const navigate = useNavigate();

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const data = await getDocs(userCollection);
                const filteredData = data.docs.map((doc=>({...doc.data(), id:doc.id})));
                setUserDetails(filteredData);
            } catch (error) {
                console.error(error);
            }
        }
        getAllUsers();
    }, [userDetails])

    const logout = (e) => {
        e.preventDefault();
        setCount(0);
        navigate('/login');
    }

    return (
        <>
        <div className="logout">
            <button className='loutbtn' onClick={logout} >Logout</button>
        </div>
            <div className="dashboard">
                <h1>Admin Panel</h1>
                <div className="userDetailTable">
                    <div className="heading">
                        <div className="name">Name</div>
                        <div className="email">Email</div>
                        <div className="phone">Phone no.</div>
                        <div className="aadhar">Aadhar no.</div>
                    </div>
                    <div className="tableBody">
                        {
                            userDetails?.map((data, index) => (
                                <>
                                    <Link to={`/${data.id}`} style={{textDecoration: "none", color: "#121221"}} >
                                        <div className="userRow" key={index} >
                                            <div className="userName">{data.firstname}</div>
                                            <div className="userEmail">{data.email}</div>
                                            <div className="phoneNo">{data.phone}</div>
                                            <div className="aadharNo">{data.aadhar}</div>
                                        </div>
                                        <hr />
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
