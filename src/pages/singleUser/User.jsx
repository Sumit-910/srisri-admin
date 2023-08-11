import './user.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

const User = () => {
    const { userid } = useParams();
    const [user, setUser] = useState({});
    const userCollection = collection(db, "users");

    const getAllUsers = async () => {
        try {
            const data = await getDocs(userCollection);
            const filteredData = data.docs.map((doc => ({ ...doc.data(), id: doc.id })));
            setUser(filteredData.find(e => e.id === userid));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllUsers();

    }, [user])
    return (
        <>
            <div className="user">
                <div className="name"><span>Name:</span> {user.firstname}&nbsp;{user.lastname}</div>
                <div className="email"><span>Email:</span> {user.email}</div>
                <div className="phone"><span>Phone no.:</span> {user.phone}</div>
                <div className="aadhar"><span>Aadhar no.:</span> {user.aadhar}</div>
                <div className="state"><span>State:</span> {user.state}</div>
                <div className="dist"><span>District:</span> {user.dist}</div>
            </div>
        </>
    )
}

export default User
