import React from 'react';
import useResources, { resourcesConst } from '../resources/useResources';

const UserList = () => {

    const users = useResources(resourcesConst.USERS);

    const renderList = () => {
        return users.map(user => (
            <li key={user.id}>{user.name}</li>
        ));
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
};

export default UserList;