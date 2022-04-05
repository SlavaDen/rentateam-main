import Button from '@mui/material/Button';
import BasketIcon from 'assets/icons/Basket.svg';
import s from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from 'store/order/order-selectors';
import { IBasketAttribute } from 'types/order';
import { useContext } from 'react';
import { OrderContext } from 'context/OrderContext';
import { setLoading } from 'store/app/app-actions';
import { ELoadingTypes } from 'enums/loading';
import { sendOrder } from 'store/order/order-actions';
import { useParams } from 'react-router-dom';

const Basket: React.FC = () => {
  const dispatch = useDispatch();

  const { delivery } = useParams();

  const isDelivery = Boolean(delivery);

  const basket = useSelector(selectBasket);

  const totalPrice = basket.reduce((acc: number, item: IBasketAttribute) => {
    if (item?.count) {
      return acc + item?.price * item?.count;
    } else {
      return acc;
    }
  }, 0);

  const { street, home } = useContext(OrderContext);

  const handleSendOrder = () => {
    const onSendOrder = async () => {
      dispatch(setLoading(ELoadingTypes.PENDING));
      setTimeout(() => {
        Promise.all([
          dispatch(sendOrder())
        ]).then(() => {
          street?.onReset();
          home?.onReset();
          dispatch(setLoading(ELoadingTypes.FULFILLED));
        });
      }, 500);
    }

    if (basket.length > 0) {
      if (isDelivery) {
        if (street?.value && home?.value) {
          onSendOrder();
        } else {
          street?.setDirty(true);
          home?.setDirty(true);
        }
      } else {
        onSendOrder();
      }
    }
  }

  return (
    <Button className={s.backet_button} onClick={() => { handleSendOrder() }}>
      {totalPrice} ₽ <BasketIcon className={s.backet_icon} />
    </Button>
  )
}

export default Basket;