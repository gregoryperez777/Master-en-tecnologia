import React from 'react';

const ListUsers = (props) => {
    const { listUsers } = props;
    console.log(props);

    return (
        <div>
            <h4>Lista de usuarios</h4>
                <ul>
                    {
                        listUsers.map((data, index) => (
                            <li key={index}>
                                <p>Nombre: {data.name}</p>
                                <p>Apellido: {data.lastname}</p> 
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
};

export default ListUsers;
