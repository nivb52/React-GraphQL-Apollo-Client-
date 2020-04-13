import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import addUserMutation  from "../graphql/mutations/addUser";


// UI
import {renderSavingMessage, rippleLoader, renderPostError, renderMsgError} from '../cmps/ui/load-and-error.jsx';


const AddUser = () => {
  const formRef = useRef();
  const [addUser, {loading, error}] = useMutation(addUserMutation);
  const [showError, setShowError] = useState(false)

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
    const typeCheck = (varible, wanted) => typeof varible === wanted
    if (!inputs.name || typeCheck(inputs.name, 'String') || 
        !inputs.rocket  || typeCheck(inputs.rocket, 'String')) {
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 2800);
        return
    } ;
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
      <div className="container middle">
    <form
      className="users"
      ref={formRef}
      onSubmit={async (ev) => handleSubmit(ev)}>
      <label htmlFor="name">
        name:
        <input disabled={loading} onChange={(ev) => changeInput(ev)} type="text" name="name" />
      </label>
      <label htmlFor="rocket">
        rocket name propusal:
        <input disabled={loading} onChange={(ev) => changeInput(ev)} type="text" name="rocket" />
      </label>

      <label htmlFor="twitter">
        twitter:
        <input disabled={loading} onChange={(ev) => changeInput(ev)} type="text" name="twitter" />
      </label>

      <button type="submit"> { loading ? rippleLoader(): 'send' }</button>
     {showError && renderMsgError(' Please provide name and rocket name, only string allowed','warning')}
    </form>
     {loading && renderSavingMessage()}
     {error && renderPostError()}

     </div>
  );
};

export default AddUser;
