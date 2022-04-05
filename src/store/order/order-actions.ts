
import { EOrderActionTypes } from "enums/order";
import { IBasketAttribute, IResetBasketAction } from "types/order";
import * as api from "api/";
import { IMessageAttribute, ISetMessageAction } from 'types/app';
import { EAppActionTypes, EErrorMessage } from 'enums/app';
import { Dispatch } from 'redux';
import { AxiosError } from "axios";

const addFromBasket = (payload: IBasketAttribute) =>({
  type: EOrderActionTypes.ADD_FROM_BASKET,
  payload
})
const removeFromBasket = (payload: number) =>({
  type: EOrderActionTypes.REMOVE_FROM_BASKET,
  payload
})

const sendOrder = () => async(dispatch: Dispatch< IResetBasketAction | ISetMessageAction>) => {
  try{
    const response = await api.sendOrder();

    dispatch({type: EOrderActionTypes.RESET_BASKET});

    const successMessage: IMessageAttribute = {
      typeMessage: 'success' ,
      textMessage: 'Спасибо за заказ'
    };

    dispatch(({
      type: EAppActionTypes.SET_MESSAGE,
      payload: successMessage
    }));

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

export { addFromBasket, removeFromBasket, sendOrder};