import React from 'react';

const ListUsersV2 = (props) => {
    const { users } = props; 
    console.log('props', props);

    return (
        <div>
            <h4>Lista de usuarios V2</h4>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.name} - {user.years} Años</li>
                    ))
                    }
                </ul>
        </div>
    );


};

export default ListUsersV2;