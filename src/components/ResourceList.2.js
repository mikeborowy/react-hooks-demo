import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = (props) => {

    const { resource } = props;
    const [resources, setResources] = useState([]);

    const getData = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource.toLowerCase()}`)
        setResources(response.data);
    }

    useEffect(() => {
        getData(resource);
    }, [resource])

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