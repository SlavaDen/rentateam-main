import { IBasketAttribute, IOrderState, TOrderAction } from 'types/order';
import { EOrderActionTypes } from 'enums/order';

const initialState: IOrderState = {
  basket: [],
}

const orderReducer = (state = initialState, action: TOrderAction): IOrderState =>{
  switch (action.type) {
    case EOrderActionTypes.ADD_FROM_BASKET:
      const itemIndex = state.basket.findIndex(
        (item) => item.productId === action.payload.productId
      );
      let newBasket = [] as IBasketAttribute[];
      if (itemIndex < 0) {
        const newItem = {
          productId: action.payload.productId,
          count: 1,
          price: action.payload.price
        };
        newBasket = [...state.basket, newItem];
      } else {
        newBasket = state.basket.map((item: IBasketAttribute, index: number) => {
          if (index === itemIndex) {
            if(item.count){
              return { ...item, count: item?.count + 1 };
            } else {
              return { ...item};
            }
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        basket: newBasket,
      };
      case EOrderActionTypes.REMOVE_FROM_BASKET:
        return {
          ...state,
          basket: state.basket.reduce((acc: IBasketAttribute[], item: IBasketAttribute) => {
            if (item.productId === action.payload) {
              let newCount = 0;
              if(item.count){
                newCount = item?.count - 1;
              }
              if (newCount > 0){
                acc.push({
                  ...item,
                  count: newCount,
                }) 
              }
            }
            return acc;
          }, []),
        };
      case EOrderActionTypes.RESET_BASKET:
        return {...state, basket: []};
      default:
        return state;
  }
}

export default orderReducer;