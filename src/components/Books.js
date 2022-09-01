import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksLoadThunk, deleteBookThunk } from '../Redux/Books/Books';

function Book() {
  const bookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksLoadThunk());
  }, []);

  const handle = (e) => {
    dispatch(deleteBookThunk(e.target.id));
  };

  return (bookList.map((book) => (
    <div key={book.id} className="container">
      <div className="infocard">
        <span>Action</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <ul>
          <button type="button">Comments</button>
          <button type="button" id={book.id} onClick={handle}>Remove</button>
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="porcentage">
        <h4>60%</h4>
      </div>
      <div className="feature">
        <h4>Current Charapter</h4>
        <h4>Chapter 17</h4>
        <button type="submit" className="update">UPDATE PROGRESS</button>
      </div>
    </div>
  )));
}

export default Book;
