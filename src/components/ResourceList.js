import React from 'react';
import useResources from '../resources/useResources';

const ResourceList = (props) => {
    const { resource } = props;
    const resources = useResources(resource);
    const renderList = () => {
        return resources.map(record => (
            <li key={record.id}>{record.title}</li>
        ));
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default ResourceList;