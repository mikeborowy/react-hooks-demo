import { useState, useEffect } from 'react';
import axios from 'axios';

export const resourcesConst = {
    POSTS: 'POSTS',
    TODOS: 'TODOS',
    USERS: 'USERS'
  } 
  
const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource.toLowerCase()}`);
            setResources(response.data);
        })(resource)
    }, [resource]);

    return resources;
}

export default useResources;