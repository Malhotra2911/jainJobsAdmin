import { Avatar, Button } from "@mui/material";
import * as React from "react";
import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CssTextField } from "../css/MUI/MuiInputCss/MuiInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/Action/CommonAction";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

// toast.success(data?.msg, {
//     autoClose: 1000,
//   });

export const LoginPage = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const dispatch = useDispatch();
  // const navigate = useNavigationType();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) {
      // toast.error('All Fields are Required');
      alert("all fields required");
    } else {
      const formdata = {
        EMAIL: email,
        PASSWORD: password,
      };

      axiosInstance.post("user/login", formdata).then((res) => {
        try {
          // alert("nice");
          console.log("login tresponr", res);
          sessionStorage.setItem(
            "token",
            JSON.stringify(res.data.tokens.access.token)
          );
          navigate("/dashboard", { replace: "true" });
        //   window.location.reload();
          toast.success("You Have Login SuccessFully!!", {
              autoClose: 5000,
            });
          // }
        } catch (error) {
          toast.error(error);
          // console.log(error);
        }
      });
      
    }
  };

  // const navigate = useNavigate();
  // const [values, setValues] = React.useState({
  //     password: '',
  //     showPassword: false,
  // });
  const [view, setView] = React.useState(false);

  const handleChange = (prop) => (event) => {
    // setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    // setValues({
    //     ...values,
    //     showPassword: !values.showPassword,
    setView(!view);
    // });
  };

  const handleMouseDownPassword = (event) => {
    // event.preventDefault();
  };

  // const handleSubmit = ()=> {
  //     navigate("/dashboard",{replace:"true"})

  // }
  return (
    <>
      <div className="login_main_contetn">
        <div className="login_content">
          <Avatar sx={{ width: 55, height: 55 }} />
          <h3>Login Page</h3>
          <CssTextField
            sx={{ color: " #F7701D", width: "75%" }}
            id="outlined-required"
            variant="outlined"
            size="small"
            color="warning"
            focused
            label="Username"
            // value={title}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            sx={{ m: 1, width: "75%" }}
            color="warning"
            size="small"
            focused
            variant="outlined"
          >
            <InputLabel color="warning" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              color="warning"
              id="outlined-adornment-password"
              type={view ? "text" : "password"}
              // value={values.password}
              // onChange={handleChange('password')}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment color="warning" position="end">
                  <IconButton
                    color="warning"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {view ? (
                      <VisibilityOff color="warning" />
                    ) : (
                      <Visibility color="warning" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            className="profile_btn"
            onClick={handleSubmit}
            type="button"
            sx={{
              width: "75%",
              height: "5vh",
              textTransform: "none",
              mt: 2,
              color: "#000000",
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              "&:hover": {
                backgroundColor: "rgba(247, 112, 29, 0.39)",
              },
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
