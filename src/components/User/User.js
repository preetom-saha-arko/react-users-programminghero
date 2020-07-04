import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const { name, img, email, phone} = props.user;

    return (
        <div className="user">
            <div className='user-img'>
                <img src={img} alt="" />
            </div>
            <div className='user-description'>
                <h3 className='user-name'>{name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button className="add-user-btn" onClick={() => props.handleAddToSummary(props.user)}> <FontAwesomeIcon icon={faPlus} /> Add</button>
            </div>
        </div>
    );
};

export default User;