import { combineReducers } from 'redux';
import categoryReducer from './category/category-reducer';
import appReducer from './app/app-reducer';
import productReducer from './product/product-reducer';
import orderReducer from './order/order-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer
})

export default rootReducer;