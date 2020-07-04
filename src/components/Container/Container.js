import React, { useState } from 'react';
import users from '../../fakeData/users'
import './Container.css'
import User from '../User/User';
import Summary from '../Summary/Summary';

const Container = () => {
    console.log(users);
    const [addedUsers, setAddedUsers] = useState([]);

    const handleAddToSummary = (user) => {
        const newAddedUsers = [...addedUsers, user];
        setAddedUsers(newAddedUsers);
    }
    
    return (
        <div className="container">
            <div className="user-container">
                {users.map(user => <User user = {user} handleAddToSummary={handleAddToSummary}></User>)}
            </div>
            <div className="summary-container">
                <Summary addedUsers={addedUsers}></Summary>
            </div>
        </div>
    );
};

export default Container;