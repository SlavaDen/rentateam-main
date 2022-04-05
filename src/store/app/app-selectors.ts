import { TRootState } from 'store/';

const selectLoading = (state:TRootState) => state.app.loading;

const selectMessageInfo = (state:TRootState) => ({
  isMessage: state.app.isMessage,
  textMessage: state.app.textMessage,
  typeMessage: state.app.typeMessage,
});

export {
  selectLoading,
  selectMessageInfo
}