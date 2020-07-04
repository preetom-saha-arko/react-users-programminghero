import React from 'react';

const Summary = (props) => {
    return (
        <div>
            <p>Total users added: {props.addedUsers.length}</p>
            <p>Total annual salary of the added users: {props.addedUsers.reduce((total, user) => total + user.salary, 0)}</p>
        </div>
    );
};

export default Summary;