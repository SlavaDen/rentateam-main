import { ELoadingTypes } from 'enums/loading';
import { EAppActionTypes } from 'enums/app';
import { IMessageAttribute } from 'types/app';

const setLoading = (payload: ELoadingTypes.PENDING | ELoadingTypes.FULFILLED | ELoadingTypes.REJECTED) => ({
  type: EAppActionTypes.SET_LOADING,
  payload,
});

const invisibleMessenger = () =>({
  type: EAppActionTypes.INVISIBLE_MESSAGE,
})


export {setLoading, invisibleMessenger};