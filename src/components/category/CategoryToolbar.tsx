import { Stack, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.scss';
import { selectCategories, selectCurrentCategory } from 'store/category/category-selectors';
import { setCurrentCategory } from 'store/category/category-actions';
import { OrderContext } from 'context/OrderContext';
import { ICategoryAttribytes } from 'types/category';
import CategoryToolbarItem from './CategoryToolbarItem';

const CategoryToolbar: React.FC = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const currentCategory = useSelector(selectCurrentCategory);

  const { categoriesRef } = useContext(OrderContext);

  const scrollToCategory = (category: ICategoryAttribytes) => {
    const currentCategory = categoriesRef?.current.find((el: HTMLElement) => parseInt(el.id) === category.id);
    currentCategory.scrollIntoView();
    window.scrollBy(0, -150);
    dispatch(setCurrentCategory(category));
  };

  return (
    <Toolbar className={s.categoryToolbar}>
      <Stack direction='row' spacing={5} className={s.categoryToolbar_itemsContainer}>
        {
          categories.map((category) =>
            <CategoryToolbarItem
              key={category.id}
              category={category}
              currentCategoryId={currentCategory?.id}
              scrollToCategory={scrollToCategory}
            />
          )
        }
      </Stack>
    </Toolbar >
  )
}

export default CategoryToolbar;