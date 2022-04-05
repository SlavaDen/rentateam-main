import { TRootState } from 'store/';

const selectBasket = (state:TRootState) => state.order.basket;
const selectProductInBasketById = (state:TRootState, productId: number) => {
  const findProduct = state.order.basket.find((item)=>item.productId === productId);
  return {
    isProductInBasket: Boolean(findProduct),
    count: findProduct?.count
  }
};

export {
  selectBasket,
  selectProductInBasketById
}