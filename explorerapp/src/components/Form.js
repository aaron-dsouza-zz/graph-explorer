import React from 'react';
import axios from 'axios';

const Form = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`http://localhost:8080/persons`);
        props.onSubmit(resp.data);
    };
    return (
        <form onSubmit={handleSubmit}>
        <button>Load Profiles</button>
      </form>
    );
};

export default Form;