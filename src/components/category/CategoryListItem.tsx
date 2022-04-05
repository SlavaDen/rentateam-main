import { Grid } from '@mui/material';
import ProductItem from 'components/product/ProductItem';
import { ICategoryAttribytes } from 'types/category';
import { useSelector } from 'react-redux';
import { selectProductsByIds } from 'store/product/product-selectors';
import { TRootState } from 'store/';
import { IProductAttribytes } from 'types/product';
import Typography from 'components/common/Typography';

interface ICategoryListItem {
  isDelivery: boolean,
  category: ICategoryAttribytes,
  isCategoryEvent: boolean,
  handleAddFromBasket: Function,
  handleRemoveFromBasket: Function
}

const CategoryListItem: React.FC<ICategoryListItem> = (props) => {

  const { name, products } = props.category;

  const { isCategoryEvent, handleAddFromBasket, handleRemoveFromBasket, isDelivery } = props;

  const productItems = useSelector((state: TRootState) =>
    selectProductsByIds(state, products, isDelivery)
  );

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Typography variant='h4'>{name}</Typography>
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          {
            productItems.map((product: IProductAttribytes) => (
              <Grid item lg={3} xl={3} md={6} sm={6} xs={12} key={product.id}>
                <ProductItem
                  product={product}
                  isCategoryEvent={isCategoryEvent}
                  addFromBasket={handleAddFromBasket}
                  removeFromBasket={handleRemoveFromBasket}
                />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CategoryListItem;