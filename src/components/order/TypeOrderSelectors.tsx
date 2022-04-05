import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import s from './index.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const TypeOrderSelector: React.FC = () => {

  const { delivery } = useParams();
  const navigate = useNavigate();

  const handleSetIsDelivery = (_: any, isDelivery: boolean) => {
    if (isDelivery !== null) {
      navigate(isDelivery ? '/delivery' : '/');
    }
  }

  const isDelivery = Boolean(delivery);

  const classes = {
    root: s.typeOrderSelector_button,
    selected: s.typeOrderSelector_button_selected
  };

  return (
    <ToggleButtonGroup
      size='small'
      value={isDelivery}
      onChange={handleSetIsDelivery}
      exclusive
    >
      <ToggleButton
        value={true}
        classes={classes}
      >
        Доставка
      </ToggleButton>
      <ToggleButton
        value={false}
        classes={classes}
      >
        Самовывоз
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default TypeOrderSelector;