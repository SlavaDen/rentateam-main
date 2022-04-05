import { ECategoryActionTypes } from 'enums/category';
import { ICategoryState, TCategoryAction } from 'types/category';

const initialState: ICategoryState = {
  categories: [],
  currentCategory: null,
}

const categoryReducer = (state = initialState, action: TCategoryAction): ICategoryState =>{
  switch (action.type) {
    case ECategoryActionTypes.SET_CATEGORIES:
      return {...state, categories: action.payload}
    case ECategoryActionTypes.SET_CURRENT_CATEGORY:
      return {...state, currentCategory: action.payload}
      default:
        return state;
  }
}

export default categoryReducer;