import { Grid } from '@mui/material';
import { OrderContext } from 'context/OrderContext';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'store/category/category-selectors';
import CategoryListItem from './CategoryListItem';
import s from './index.module.scss';
import { addFromBasket, removeFromBasket } from 'store/order/order-actions';
import { useParams } from 'react-router-dom';

const CategoryList: React.FC = () => {

  const { delivery } = useParams();

  const isDelivery = Boolean(delivery);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const { addToCategoriesRef } = useContext(OrderContext);

  const handleAddFromBasket = (id: number, price: number) => {
    dispatch(addFromBasket({ productId: id, price }));
  };
  const handleRemoveFromBasket = (id: number) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <Grid container spacing={3}>
      {
        categories.map((category) =>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}
            key={category.id}
            id={`${category.id}`}
            ref={addToCategoriesRef}
            className={`${s.categoryListItem} ${category.id % 2 && s.categoryListItem_containerEvent}`}
          >
            <CategoryListItem
              isDelivery={isDelivery}
              category={category}
              isCategoryEvent={Boolean(category.id % 2)}
              handleAddFromBasket={handleAddFromBasket}
              handleRemoveFromBasket={handleRemoveFromBasket}
            />
          </Grid>
        )
      }
    </Grid>
  )
}

export default CategoryList;