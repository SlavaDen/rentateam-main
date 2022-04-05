
import Preloader from 'components/common/Preloader';
import { ELoadingTypes } from 'enums/loading';
import ProductLayout from 'hoc/ProductLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setLoading } from 'store/app/app-actions';
import { selectLoading } from 'store/app/app-selectors';
import { getCategories } from 'store/category/category-actions';
import { getProducts } from 'store/product/product-actions';
import CategoryList from './components/category/CategoryList';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(setLoading(ELoadingTypes.PENDING));
    setTimeout(() => {
      Promise.all([
        dispatch(getCategories()),
        dispatch(getProducts())
      ]).then(() => {
        dispatch(setLoading(ELoadingTypes.FULFILLED));
      });
    }, 500);
  }, [dispatch])


  if (loading === ELoadingTypes.PENDING) {
    return (<Preloader />)
  }
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProductLayout>
            <CategoryList />
          </ProductLayout>
        }
      />
      <Route
        path='/:delivery'
        element={
          <ProductLayout>
            <CategoryList />
          </ProductLayout>
        }
      />
    </Routes>
  )
}

export default App;