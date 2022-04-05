
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from 'components/common';
import Stack from '@mui/material/Stack';
import { LogotypeLarge } from './Logotype';
import { Avatar } from '@mui/material';
import { Toolbar } from '@mui/material';
import s from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <LogotypeLarge />
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Box
            className={s.footer_content}
          >
            <Grid container spacing={3}>
              <Grid item lg={2} xl={2} md={6} sm={12} xs={12}>
                <Stack spacing={2}>
                  <Typography variant="h4">Раздел 1</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                </Stack>
              </Grid>
              <Grid item lg={2} xl={2} md={6} sm={12} xs={12}>
                <Stack spacing={2}>
                  <Typography variant="h4">Раздел 1</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                </Stack>
              </Grid>
              <Grid item lg={4} xl={4} md={12} sm={12} xs={12}>
                <Toolbar className={s.footer_avatarContainer}>
                  <Avatar className={s.footer_avatar}>
                    {``}
                  </Avatar>
                </Toolbar>
              </Grid>
              <Grid item lg={2} xl={2} md={6} sm={12} xs={12}>
                <Stack spacing={2}>
                  <Typography variant="h4">Раздел 1</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                </Stack>
              </Grid>
              <Grid item lg={2} xl={2} md={6} sm={12} xs={12}>
                <Stack spacing={2}>
                  <Typography variant="h4">Раздел 1</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                  <Typography variant="h5">Подраздел</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;