import Stack from '@mui/material/Stack';
import s from './index.module.scss';
import LogotypeItem, { LogotypeItemLarge } from './LogotypeItem';

const Logotype: React.FC = () => {
  return (
    <Stack direction='row' spacing={3} className={s.logotype}>
      <LogotypeItem />
      <LogotypeItem />
      <LogotypeItem />
    </Stack>
  )
}

const LogotypeLarge: React.FC = () => {
  return (
    <Stack direction='row' spacing={3} className={s.logotype}>
      <LogotypeItemLarge />
      <LogotypeItemLarge />
      <LogotypeItemLarge />
    </Stack>
  )
}

export { LogotypeLarge }
export default Logotype;