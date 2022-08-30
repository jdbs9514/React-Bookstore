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
      <input type="text" className="inputbook" placeholder="Book" required />
      <input type="text" className="inputauthor" placeholder="Author" required />
      <button type="submit" onClick={() => dispatch(bookAdd(title.current.value, author.current.value, uniqid()))} className="submit">Submit</button>
    </form>
  );
}

export default Form;
