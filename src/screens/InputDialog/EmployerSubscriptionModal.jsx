import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import "../../css/jssubscription.css"
import { CssTextField } from '../../css/MUI/MuiInputCss/MuiInput';



export default function EmployerSubscription({ Open }) {
    const handleClose = () => Open(false);
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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
                    <h2 className="plans_modal_heading">
                        Change Plan
                    </h2>
                    <div className="plans_rate">
                    </div>
                    <Divider sx={{ width: "90%", border: "1px solid grey", mt: 1 }} />
                    <div className="plans_rate">
                        <CssTextField
                            id="outlined-required"
                            variant="outlined"
                            size='small'
                            color="warning"
                            focused
                            label="Plan Duration"
                        />
                        <FormControl color="warning" size="small" focused variant="outlined">
                            <InputLabel color="warning" htmlFor="outlined-adornment-password">Plan  Price</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start" color="warning" sx={{ color: "orange" }}>₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                        <CssTextField
                            id="outlined-required"
                            variant="outlined"
                            size='small'
                            color="warning"
                            focused
                            label="Plan Duration"
                        />
                        <FormControl color="warning" size="small" focused variant="outlined">
                            <InputLabel color="warning" htmlFor="outlined-adornment-password">Plan  Price</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start" color="warning" sx={{ color: "orange" }}>₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                        <CssTextField
                            id="outlined-required"
                            variant="outlined"
                            size='small'
                            color="warning"
                            focused
                            label="Plan Duration"
                        />
                        <FormControl color="warning" size="small" focused variant="outlined">
                            <InputLabel color="warning" htmlFor="outlined-adornment-password">Plan  Price</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start" color="warning" sx={{ color: "orange" }}>₹</InputAdornment>}
                                label="Amount"
                            />
                        </FormControl>
                        <CssTextField
                            id="outlined-required"
                            variant="outlined"
                            size='small'
                            color="warning"
                            focused
                            label="Plan Duration"
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                        />
                        <FormControl color="warning" size="small" focused variant="outlined">
                            <InputLabel color="warning" htmlFor="outlined-adornment-password">Plan  Price</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start" color="warning" sx={{ color: "orange" }}>₹</InputAdornment>}
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
                            // onClick={handleSubmit}
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
                            Submit
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
