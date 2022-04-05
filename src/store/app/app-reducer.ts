
import { TAppAction, IAppState } from 'types/app';
import { EAppActionTypes } from 'enums/app';
import { ELoadingTypes } from 'enums/loading';

const initialState: IAppState = {
  loading: ELoadingTypes.FULFILLED,
  isMessage: false,
  textMessage: '',
  typeMessage: 'success',
}

const appReducer = (state = initialState, action: TAppAction): IAppState =>{
  switch (action.type) {
    case EAppActionTypes.SET_LOADING:
      return {...state, loading: action.payload}
    case EAppActionTypes.SET_MESSAGE:
      return {
        ...state, 
        isMessage: true, 
        textMessage: action.payload.textMessage,
        typeMessage: action.payload.typeMessage
      }
    case EAppActionTypes.INVISIBLE_MESSAGE:
      return {
        ...state, 
        isMessage: false, 
      }
      default:
        return state;
  }
}

export default appReducer;