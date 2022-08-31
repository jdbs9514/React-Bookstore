const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';

const firstState = [
  {
    title: 'The Hunger Games',
    author: 'Author1',
    id: 1,
  },

  {
    title: 'Harry Potter',
    author: 'Author2',
    id: 2,
  },
];

const reducerBook = (state = firstState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const bookAdd = (titleBook, authorBook, idBook) => {
  const book = {
    type: ADD_BOOK,
    title: titleBook,
    author: authorBook,
    id: idBook,
  };
  return book;
};

export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVE_BOOK,
    id: bookId,
  };
  return removedBook;
};

export default reducerBook;
