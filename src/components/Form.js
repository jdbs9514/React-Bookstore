import { useDispatch } from 'react-redux/es/exports';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { bookAdd } from '../Redux/Books/Books';

function Form() {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <form className="form">
      <input ref={title} type="text" className="inputbook" placeholder="Book" required />
      <input ref={author} type="text" className="inputauthor" placeholder="Author" required />
      <button type="button" className="submit" onClick={() => dispatch(bookAdd(title.current.value, author.current.value, uniqid()))}>Submit</button>
    </form>
  );
}

export default Form;
