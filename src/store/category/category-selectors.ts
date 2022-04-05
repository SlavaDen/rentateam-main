import { TRootState } from 'store/';

const selectCategories = (state:TRootState) => state.category.categories;
const selectCurrentCategory = (state:TRootState) => state.category.currentCategory;

export {
  selectCategories,
  selectCurrentCategory,
}