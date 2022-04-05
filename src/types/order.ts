import { EOrderActionTypes } from 'enums/order';

export interface IBasketAttribute{
  productId: number,
  price: number,
  count?: number
}

export interface IOrderState {
  basket: IBasketAttribute[]
}

export interface IAddFromBasketAction {
  type: EOrderActionTypes.ADD_FROM_BASKET;
  payload: IBasketAttribute
}

export interface IRemoveFromBasketAction {
  type: EOrderActionTypes.REMOVE_FROM_BASKET;
  payload: number
}

export interface IResetBasketAction {
  type: EOrderActionTypes.RESET_BASKET;
}

export type TOrderAction = IAddFromBasketAction | IRemoveFromBasketAction | IResetBasketAction;