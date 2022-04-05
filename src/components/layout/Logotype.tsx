import Stack from '@mui/material/Stack';
import s from './index.module.scss';
import LogotypeItem from './LogotypeItem';

const Logotype: React.FC = () => {
  return (
    <Stack direction='row' spacing={3} className={s.logotype}>
      <LogotypeItem />
      <LogotypeItem />
      <LogotypeItem />
    </Stack>
  )
}

export default Logotype;