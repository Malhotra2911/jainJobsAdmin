import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from 'react-redux';
import { getPlans, PlanUpdate } from '../../redux/Action/CommonAction';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.3rem",
    alignItems: "center",
    borderRadius: "10px",
    p: 2,
};

export default function SubscriptionEditionForm({ sign, element }) {

    console.log(element);
    const handleClose = () => sign(false);
    const dispatch = useDispatch();

    const FeedbackData = useSelector(
        (state) => state.CommonReducer.plans
    );

    var planId = element;

    var PlanData = FeedbackData.filter((el) => {
        return el.PLAN_ID == planId;
    });
    const [duration, setDuration] = React.useState();
    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();
    const navigate = useNavigate();
    
    console.log(PlanData);
    
    const handleSubmit = (e) => {
        var userRole = PlanData[0].USER_ROLE;
        dispatch(PlanUpdate(planId,userRole,duration,price));
        sign(false);
    }

    React.useEffect(() => {
        dispatch(getPlans());
    }, [])

    return (
        <div>
            <Modal
                keepMounted
                open={sign}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Edit Plan
                    </Typography>
                    
                    <TextField
                        sx={{ color: " #F7701D", width: "80%" }}
                        required
                        id="outlined-required"
                        variant="standard"
                        color="warning"
                        focused
                        label="Plan Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        sx={{ color: " #F7701D", width: "80%" }}
                        required
                        color="warning"
                        variant="standard"
                        focused
                        label="Plan Duration"

                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleSubmit}
                        type="button"
                        sx={{
                            width: "50%",
                            height: "7vh",
                            textTransform: "none",
                            mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
