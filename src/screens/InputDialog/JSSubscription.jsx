import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "../../css/jssubscription.css";
import { CssTextField } from "../../css/MUI/MuiInputCss/MuiInput";

export default function JSSubscription({ Open, isplantype }) {
  const handleClose = () => Open(false);
  const [values, setValues] = React.useState({
    ma_month: "",
    mb_month: "",
    mc_month: "",
    ma_price: "",
    mb_price: "",
    mc_price: "",
  });


  const handleChange = (name) => (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const onhandlesubmit = () => {
    if (!values.ma_month) {
      if (!values.ma_price) {
        alert("please enter ammount  for 1st plan");
      }

      return false;
    }

    if (!values.mb_month) {
      if (!values.mb_price) {
        alert("please enter ammount  for 2st plan");
      }
      return false;
    }

    if (!values.mc_month) {
      if (!values.mc_price) {
        alert("please enter ammount  for 3st plan");
      }
      return false;
    }
    
  };

  return (
    <div style={{ outline: "none" }}>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="subscription_modal">
          <h3 className="plans_modal_heading">Change Plan</h3>
          <div className="plans_rate">
            <h4>Plan Name</h4>
            <h4>Plan Price</h4>
          </div>
          <Divider sx={{ width: "90%", border: "1px solid grey", mt: 1 }} />
          <div className="plans_rate">
            <CssTextField
              id="outlined-required"
              variant="outlined"
              size="small"
              color="warning"
              focused
              type="number"
              label="Plan Month"
              onChange={handleChange("ma_month")}
            />
            <FormControl
              color="warning"
              size="small"
              focused
              variant="outlined"
            >
              <InputLabel color="warning" htmlFor="outlined-adornment-password">
                Plan Month
              </InputLabel>
              <OutlinedInput
                type="number"
                id="outlined-adornment-amount"
                onChange={handleChange("ma_price")}
                startAdornment={
                  <InputAdornment
                    position="start"
                    color="warning"
                    sx={{ color: "orange" }}
                  >
                    ₹
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <CssTextField
              id="outlined-required"
              variant="outlined"
              size="small"
              color="warning"
              focused
              label="Plan Month"
              onChange={handleChange("mb_month")}
              type="number"
            />

            <FormControl
              color="warning"
              size="small"
              focused
              variant="outlined"
            >
              <InputLabel color="warning" htmlFor="outlined-adornment-password">
                Plan Price
              </InputLabel>
              <OutlinedInput
                type="number"
                id="outlined-adornment-amount"
                onChange={handleChange("mb_price")}
                startAdornment={
                  <InputAdornment
                    position="start"
                    color="warning"
                    sx={{ color: "orange" }}
                  >
                    ₹
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <CssTextField
              id="outlined-required"
              variant="outlined"
              size="small"
              color="warning"
              focused
              label="Plan Month"
              onChange={handleChange("mc_month")}
              type="number"
            />
            <FormControl
              color="warning"
              size="small"
              focused
              variant="outlined"
            >
              <InputLabel color="warning" htmlFor="outlined-adornment-password">
                Plan Price
              </InputLabel>
              <OutlinedInput
                type="number"
                id="outlined-adornment-amount"
                onChange={handleChange("mc_price")}
                startAdornment={
                  <InputAdornment
                    position="start"
                    color="warning"
                    sx={{ color: "orange" }}
                  >
                    ₹
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </div>
          <div className="plans_rate">
            <Button
              variant="contained"
              className="profile_btn"
              onClick={handleClose}
              type="button"
              sx={{
                width: "10vw",
                height: "5vh",
                textTransform: "none",
                // mt: 2,
                color: "#000000",
                backgroundColor: "#F7701D",
                "&:hover": {
                  backgroundColor: "rgba(247, 112, 29, 0.39)",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              className="profile_btn"
              onClick={onhandlesubmit}
              type="button"
              sx={{
                width: "10vw",
                height: "5vh",
                textTransform: "none",
                mt: 2,
                color: "#000000",
                backgroundColor: "#F7701D",
                "&:hover": {
                  backgroundColor: "rgba(247, 112, 29, 0.39)",
                },
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
