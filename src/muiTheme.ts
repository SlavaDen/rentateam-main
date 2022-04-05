import { createTheme } from "@mui/material";
import { EFont } from "enums/font";

const theme = createTheme({
  typography: {
    fontFamily: EFont.REGULAR,
  },
})

export default theme;