import { EAppActionTypes } from 'enums/app';
import { ELoadingTypes } from 'enums/loading';

export interface IMessageAttribute {
  textMessage: string,
  typeMessage: 'success' | 'error'
}

export interface IAppState {
  loading: ELoadingTypes.PENDING | ELoadingTypes.FULFILLED | ELoadingTypes.REJECTED,
  isMessage: boolean,
  textMessage: string,
  typeMessage: 'success' | 'error'
}

export interface ISetLoadingAction {
  type: EAppActionTypes.SET_LOADING;
  payload: ELoadingTypes
}

export interface ISetMessageAction {
  type: EAppActionTypes.SET_MESSAGE;
  payload: IMessageAttribute
}

export interface IInvisibleMessageAction {
  type: EAppActionTypes.INVISIBLE_MESSAGE;
}

export type TAppAction = ISetLoadingAction | ISetMessageAction | IInvisibleMessageAction