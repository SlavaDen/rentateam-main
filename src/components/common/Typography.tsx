
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import React from 'react';
import s from './index.module.scss';

const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <MuiTypography {...props} classes={{ root: s.typography }}>{children}</MuiTypography>
}

export { Typography };
export default Typography;