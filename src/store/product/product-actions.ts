import * as api from 'api/';
import { ISetProductsAction } from 'types/product';
import { EProductActionTypes } from 'enums/product';
import { Dispatch } from 'redux';
import { ISetMessageAction, IMessageAttribute } from 'types/app';
import { AxiosError } from 'axios';
import { EAppActionTypes, EErrorMessage } from 'enums/app';

const getProducts = () => async(dispatch: Dispatch<ISetProductsAction | ISetMessageAction>) => {
  try{
    const response = await api.getProducts();

    dispatch({type: EProductActionTypes.SET_PRODUCTS, payload: response.data});

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

export {getProducts};