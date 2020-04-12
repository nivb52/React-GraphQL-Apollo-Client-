import React, { useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import {renderSavingMessage, renderPostError} from '../cmps/ui/load-and-error.jsx';


const addUserMutation = gql`
  mutation addUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      affected_rows
    }
  }
`;


const AddUser = () => {
  const formRef = useRef();
  const [addUser, {loading, error}] = useMutation(addUserMutation);

  const resetFields = () => {
    setInputs({});
    formRef.current.reset();
  };

  const [inputs, setInputs] = useState({});

  const changeInput = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!inputs.name || !inputs.rocket) return;
    try {
      await addUser({
        variables: {
          objects: [
            { name: inputs.name, rocket: inputs.rocket },
          ],
        },
      });
      resetFields();
    } catch (error) {
        console.log(error);
    }
  }

  return (
      <div className="container">
    <form
      className="users"
      ref={formRef}
      onSubmit={async (ev) => handleSubmit(ev)}>
      <label htmlFor="name">
        name:
        <input onChange={(ev) => changeInput(ev)} type="text" name="name" />
      </label>
      <label htmlFor="rocket">
        rocket name propusal:
        <input onChange={(ev) => changeInput(ev)} type="text" name="rocket" />
      </label>

      <label htmlFor="twitter">
        twitter:
        <input onChange={(ev) => changeInput(ev)} type="text" name="twitter" />
      </label>

      <button type="submit"> send</button>
    </form>
     {loading && renderSavingMessage()}
     {error && renderPostError()}
     </div>
  );
};

export default AddUser;
