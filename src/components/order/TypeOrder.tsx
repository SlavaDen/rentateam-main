import s from './index.module.scss';
import Grid from '@mui/material/Grid';
import { Typography } from 'components/common';
import ContactOrderForm from './ContactOrderForm';
import { useParams } from 'react-router-dom';
import TypeOrderSelector from './TypeOrderSelectors';

const TypeOrder: React.FC = () => {

  const { delivery } = useParams();

  const isDelivery = Boolean(delivery);

  return (
    <Grid container spacing={5} className={s.typeOrder}>
      <Grid item lg={8} xl={8} md={12} sm={12} xs={12}>
        <Typography variant='h2' className={s.typeOrder_city}>
          {isDelivery ? 'Доставка г. Москва' : 'Самовывоз г. Москва'}
        </Typography>
      </Grid>
      <Grid item lg={4} xl={4} md={12} sm={12} xs={12} className={s.typeOrder_selector}>
        <TypeOrderSelector />
      </Grid>
      {
        isDelivery && (
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <ContactOrderForm />
          </Grid>
        )
      }
    </Grid>
  )
}

export default TypeOrder;