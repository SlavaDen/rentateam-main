import { IProductState, TProductAction } from 'types/product';
import { EProductActionTypes } from 'enums/product';

const initialState: IProductState = {
  products: [],
}

const productReducer = (state = initialState, action: TProductAction): IProductState =>{
  switch (action.type) {
    case EProductActionTypes.SET_PRODUCTS:
      return {...state, products: action.payload}
      default:
        return state;
  }
}

export default productReducer;