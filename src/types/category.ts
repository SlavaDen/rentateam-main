import { ECategoryActionTypes } from 'enums/category';

export interface ICategoryAttribytes {
  readonly id: number,
  name: string,
  products: Array<number>
}

export interface ICategoryState {
  categories: ICategoryAttribytes[] | [],
  currentCategory: ICategoryAttribytes | null,
}

export interface ISetCategoriesAction {
  type: ECategoryActionTypes.SET_CATEGORIES;
  payload: ICategoryAttribytes[]
}

export interface ISetCurrentCategoryAction {
  type: ECategoryActionTypes.SET_CURRENT_CATEGORY;
  payload: ICategoryAttribytes
}

export type TCategoryAction = ISetCategoriesAction | ISetCurrentCategoryAction