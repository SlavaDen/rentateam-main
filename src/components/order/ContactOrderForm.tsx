import s from './index.module.scss';
import Stack from '@mui/material/Stack';
import { Typography, StyledTextField } from 'components/common';
import { Tooltip } from '@mui/material';
import { useContext } from 'react';
import { OrderContext } from 'context/OrderContext';

const ContactOrderForm: React.FC = () => {

  const { street, home } = useContext(OrderContext);

  return (
    <form autoComplete='off' className={s.contactOrderForm_container}>
      <Stack direction='row' spacing={1} className={s.contactOrderForm_inputContainer}>
        <Typography variant='h4' className={s.contactOrderForm_inputLabel}>Улица</Typography>
        <Tooltip
          arrow
          open={Boolean(!street?.value && street?.isDirty) || Boolean(!home?.value && home?.isDirty)}
          title={<Typography className={s.contactOrder_tooltipText}>Нужно заполнить для оформления доставки</Typography>}
          classes={{ tooltip: s.contactOrder_tooltip, arrow: s.contactOrder_tooltipArrow }}
        >
          <StyledTextField
            size='small'
            placeholder='Улица'
            variant='outlined'
            value={street?.value}
            onChange={(e) => street?.onChange(e)}
            onBlur={(e) => street?.onBlur(e)}
          />
        </Tooltip>
      </Stack>
      <Stack direction='row' spacing={1} className={s.contactOrderForm_inputContainer}>
        <Typography variant='h4' className={s.contactOrderForm_inputLabel}>Дом</Typography>
        <StyledTextField
          size='small'
          placeholder='Дом'
          variant='outlined'
          value={home?.value}
          onChange={(e) => home?.onChange(e)}
          onBlur={(e) => home?.onBlur(e)}
        />
      </Stack>
    </form>
  )
}

export default ContactOrderForm;