import { Card, CardContent, CardMedia, IconButton, Stack } from "@mui/material";
import s from "./index.module.scss";
import { IProductAttribytes } from "types/product";
import Typography from "components/common/Typography";
import CombinedShape from "assets/icons/CombinedShape.svg";
import Minus from "assets/icons/Minus.svg";
import { useSelector } from "react-redux";
import { selectProductInBasketById } from "store/order/order-selectors";
import { TRootState } from 'store/';

interface IProductItem {
  product: IProductAttribytes,
  isCategoryEvent: boolean,
  addFromBasket: Function,
  removeFromBasket: Function,
}

const ProductItem: React.FC<IProductItem> = (props) => {

  const { id, name, price, img } = props.product;
  const { isCategoryEvent, addFromBasket, removeFromBasket } = props;

  const { isProductInBasket, count } = useSelector((state: TRootState) => selectProductInBasketById(state, id));

  return (
    <Card className={`${s.productItem_card} ${isCategoryEvent ? s.productItem_cardOdd : s.productItem_cardEvent}`}>
      <div className={s.productItem_imageContainer}>
        <CardMedia
          component="img"
          width={100}
          image={img}
          alt={name}
          className={s.productItem_image}
        />
        {
          isProductInBasket ? (
            <Stack className={s.productItem_actionBasketButton} direction="row">
              <IconButton
                size="large"
                onClick={() => { removeFromBasket(id) }}
              >
                <Minus />
              </IconButton>
              <Typography className={s.productItem_count}>
                {count}
              </Typography>
              <IconButton
                size="large"
                onClick={() => { addFromBasket(id, price) }}
              >
                <CombinedShape className={s.productItem_shapeWhite} />
              </IconButton>
            </Stack>
          ) : (
            <IconButton
              className={s.productItem_addBasketButton}
              size="large"
              onClick={() => { addFromBasket(id, price) }}
            >
              <CombinedShape />
            </IconButton>
          )
        }
      </div>
      <CardContent className={s.productItem_info}>
        <Typography variant="h5" className={s.productItem_name}>{name}</Typography>
        <Typography variant="h5" className={s.productItem_price}>{price}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductItem;