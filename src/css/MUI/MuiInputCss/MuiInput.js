import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
export const Boxtab = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("mobile")]: {
      "& .MuiTextField-root": { m: 1, width: "100%" },
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.up("tablet")]: {
      "& .MuiTextField-root": { m: 1, width: "100%" },
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.up("desktop")]: {
      "& .MuiTextField-root": { m: 1, width: "80%" },
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.up("big")]: {
      "& .MuiTextField-root": { m: 1, width: "50%" },
      width: "70%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
export const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#F7701D",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#F7701D",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F7701D",
      },
      "&:hover fieldset": {
        borderColor: " #F7701D",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#F7701D",
      },
    },
  });
  