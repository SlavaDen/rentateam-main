import Box from '@mui/material/Box';
import s from './index.module.scss';

const LogotypeItem: React.FC = () => {
  return (
    <Box className={s.logotype_item} />
  )
}

const LogotypeItemLarge: React.FC = () => {
  return (
    <Box className={s.logotype_itemLarge} />
  )
}

export { LogotypeItemLarge };
export default LogotypeItem;