import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
import { resourcesConst } from '../resources/useResources';

const App = () => {

  const [resource, setResource ] = useState( resourcesConst.POSTS );

  return (
    <div className="App">
        <div>
          <button onClick={() => setResource( resourcesConst.POSTS )}>Posts</button>
          <button onClick={() => setResource( resourcesConst.TODOS )}>Todos</button>
        </div>
        <UserList />
        <ResourceList resource={resource} />
    </div>
  );
}

export default App;
