import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CheckStatus } from '../Redux/categories/categories';

function Category() {
  const response = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <div className="category">
      <button type="button" onClick={() => dispatch(CheckStatus())}>Check status</button>
      <p>{response}</p>
    </div>
  );
}

export default Category;
