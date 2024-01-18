import * as React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import "../css/Blogs.css"
import ProfileBar from '../components/ProfileBar'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const ResetPassword = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        navigate("/dashboard", { replace: "true" })

    }

    return (
        <>
            <div className="admin_dashboard_container">
                <AdminSidebar />
                <div className="admin_dashboard_content">
                    <ProfileBar />
                    <div className="tables_group">

                        {/* <BidInsightsTable/> */}
                        <h3 className='resetpassword_heading'>Reset Password</h3>
                        <div className="reset_password">


                            <FormControl sx={{ m: 1, width: "75%" }} color="warning" size="small" focused variant="outlined">
                                <InputLabel color="warning" htmlFor="outlined-adornment-password">Old Password</InputLabel>
                                <OutlinedInput
                                    color="warning"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment color="warning" position="end">
                                            <IconButton
                                                color="warning"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Old Password"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: "75%" }} color="warning" size="small" focused variant="outlined">
                                <InputLabel color="warning" htmlFor="outlined-adornment-password">New Password</InputLabel>
                                <OutlinedInput
                                    color="warning"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment color="warning" position="end">
                                            <IconButton
                                                color="warning"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="New Password"
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: "75%" }} color="warning" size="small" focused variant="outlined">
                                <InputLabel color="warning" htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    color="warning"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment color="warning" position="end">
                                            <IconButton
                                                color="warning"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
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
                </div>
            </div>
        </>
    )
}

export default ResetPassword