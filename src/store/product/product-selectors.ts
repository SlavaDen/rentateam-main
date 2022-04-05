import { TRootState } from 'store/';
import { IProductAttribytes } from 'types/product';

const selectProductsByIds = (state:TRootState, ids: Array<number>, isDelivery: boolean) => {

  let products = ids.reduce((acc: IProductAttribytes[], productId: number)=>{
    
    const product = state.product.products.find(item=>item.id === productId);

    if(isDelivery){
      if(product && product?.delivery === true){
        acc.push(product);
      }
    } else {
      if(product){
        acc.push(product);
      }
    }


    return acc;
  }, []);

  return products;
};

export {
  selectProductsByIds,
}