import { styled, TextField } from '@mui/material';
import { EColor } from 'enums/color';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: EColor.GRAY50,
  },
  '& .MuiOutlinedInput-input': {
    padding: '12.5px 14px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

export { StyledTextField };
export default StyledTextField;
