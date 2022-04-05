
import { Box, Grid } from '@mui/material';
import s from './index.module.scss';
import Header from 'components/layout/Header';
import TypeOrder from 'components/order/TypeOrder';
import CategoryToolbar from 'components/category/CategoryToolbar';
import Messenger from 'components/layout/Messenger';
import Footer from 'components/layout/Footer';

interface IProductLayout {
  children: React.ReactNode,
}

const ProductLayout: React.FC<IProductLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        className={s.productLayout_content}
      >
        <Grid container spacing={3}>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12} className={s.productLayout_grid}>
            <TypeOrder />
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12} className={s.productLayout_grid}>
            <CategoryToolbar />
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            {children}
          </Grid>
        </Grid>
        <Messenger />
        <Footer />
      </Box>
    </>
  )
}

export default ProductLayout;