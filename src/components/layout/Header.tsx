import { AppBar, Toolbar, Box, useScrollTrigger, Slide } from '@mui/material';
import Logotype from './Logotype';
import s from './index.module.scss';
import Basket from 'components/order/Basket';
import CategoryToolbar from 'components/category/CategoryToolbar';

interface IHeader {
  window?: () => Window;
  children?: React.ReactElement;
}

const Header: React.FC<IHeader> = (props) => {

  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 310,
    target: window ? window() : undefined,
  });

  if (!trigger) {
    return (
      <Slide
        appear={true}
        direction='down'
        in={!trigger}
      >
        <AppBar
          className={s.header_appBar}
        >
          <Logotype />
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Basket />
          </Toolbar>
        </AppBar>
      </Slide>
    );
  } else {
    return (
      <AppBar
        classes={{ root: `${s.header_appBar} ${s.header_appBarTriggered}` }}
        {...props}
      >
        <Logotype />
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Basket />
        </Toolbar>
        <CategoryToolbar />
      </AppBar >
    );
  }
}

export default Header;