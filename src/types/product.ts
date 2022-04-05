import { EProductActionTypes } from 'enums/product';

export interface IProductAttribytes {
  id: number,
  name: string,
  price: number,
  delivery: boolean,
  img: string
}

export interface IProductState {
  products: IProductAttribytes[],
}

export interface ISetProductsAction {
  type: EProductActionTypes.SET_PRODUCTS;
  payload: IProductAttribytes[]
}

export type TProductAction = ISetProductsAction