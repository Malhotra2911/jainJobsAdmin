import { Button } from '@mui/material'
import * as React from 'react'
import { useDispatch } from 'react-redux';
import { CssTextField } from '../../css/MUI/MuiInputCss/MuiInput'
import { addCredit } from '../../redux/Action/CommonAction';

const Credits = () => {
  const [userId,setUserId] = React.useState();
  const[creditamount,setCreditAmount] = React.useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCredit(userId,creditamount));
    window.location.reload(true);
  }

  

  return (
    <>
      <div className='add_city_content'>
        <h3 className='add_city_heading'> Add Credits</h3>
        <CssTextField
          sx={{ color: " #F7701D", width: "95%" }}
          id="outlined-required"
          variant="outlined"
          size='small'
          color="warning"
          focused
          label="User Id"
          onChange={(e) => setUserId(e.target.value)}
        />
        <CssTextField
          sx={{ color: " #F7701D", width: "95%" }}
          id="outlined-required"
          variant="outlined"
          size='small'
          color="warning"
          focused
          label="Credit Amount"
          onChange={(e) => setCreditAmount(e.target.value)}
        />
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
    </>
  )
}

export default Credits