import * as api from 'api/';
import { ICategoryAttribytes, ISetCategoriesAction, ISetCurrentCategoryAction } from 'types/category';
import { ECategoryActionTypes } from 'enums/category';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { ISetMessageAction, IMessageAttribute } from 'types/app';
import { EAppActionTypes, EErrorMessage } from 'enums/app';

const setCurrentCategory = (payload: ICategoryAttribytes) => ({
  type: ECategoryActionTypes.SET_CURRENT_CATEGORY,
  payload,
});

const getCategories = () => async(dispatch: Dispatch<ISetCategoriesAction | ISetCurrentCategoryAction | ISetMessageAction>) => {
 try {
  const response = await api.getCategories();

  const categories = await response.data as ICategoryAttribytes[];

  dispatch({type: ECategoryActionTypes.SET_CATEGORIES, payload: categories});
  dispatch({type: ECategoryActionTypes.SET_CURRENT_CATEGORY, payload: response.data[0]});
 } catch (error: unknown) {

    const errorData = error as AxiosError;

    if(errorData.response){
      const errorMessage: IMessageAttribute = {
        typeMessage: 'error' ,
        textMessage: errorData.response.data.message
      };

      dispatch(({
        type: EAppActionTypes.SET_MESSAGE,
        payload: errorMessage
      }));

    } else {
      const errorMessage: IMessageAttribute = {
        typeMessage: 'error' ,
        textMessage: EErrorMessage.UNKNOWN
      };

      dispatch(({
        type: EAppActionTypes.SET_MESSAGE,
        payload: errorMessage
      }));
    }
 }
}

export {setCurrentCategory, getCategories};