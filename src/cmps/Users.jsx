import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import getUsers from '../graphql/queries/getUsers';
// UI
import './users.css';
import {
  rippleLoader,
  renderFetchError,
  renderMsgError,
} from './ui/load-and-error';

const Users = () => {
  const { data, loading, error  } = useQuery(getUsers);
  if (loading) return rippleLoader();
  if (error) return renderFetchError();
  if (!data) return renderMsgError('Not Found','warning') ;

  return (
    <>

    <div className="users-grid --header">
            <span className="capitalized bold"> name  </span>
            <span className="capitalized bold"> rocket name</span>
            <span className="capitalized bold"> twitter </span>
    </div>
    
    {data.users && data.users.map( (user, i) => 
      <div className="users-grid" key={i}>
            
            <span className="capitalized"> {user.name} </span>
            <span> {user.rocket} </span>
            <span> {user.twitter} </span>
      </div>
        )}
    </>
  );
};

export default Users;
