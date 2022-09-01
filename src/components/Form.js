import { useDispatch } from 'react-redux/es/exports';
import React, { useState } from 'react';
import { bookAddThunk } from '../Redux/Books/Books';

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAddThunk(state));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        onChange={handle}
        value={state.title}
        className="inputbook"
        placeholder="Book"
      />
      <input
        name="author"
        type="text"
        onChange={handle}
        value={state.author}
        className="inputauthor"
        placeholder="Author"
      />
      <button type="submit" className="submit">Submit</button>
    </form>
  );
}

export default Form;
