import * as React from 'react'
import "../../css/addcity.css"
import { Button } from '@mui/material';
import {CssTextField} from "../../css/MUI/MuiInputCss/MuiInput"
import { useDispatch } from 'react-redux';
import { addCity } from '../../redux/Action/CommonAction';

const Addcity = () => {
    const [cityname,setCityName] = React.useState("");
    const [statename,setStateName]= React.useState("");
    const [countryname,setCountryName] = React.useState("");
    const [latitude,setLatitude] = React.useState("");
    const [longitude,setLongitude] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // e.preventDefault();
        dispatch(addCity(cityname,statename,countryname,latitude,longitude));
        window.location.reload(true);
        
        setCityName("");
        setStateName("");
        setCountryName("");
        setLatitude("");
        setLongitude("");

    }
    
    
    return (
        <>
            <div className='add_city_content'>
                <h3 className='add_city_heading'> Add City</h3>
                <CssTextField
                    sx={{ color: " #F7701D", width: "95%" }}
                    id="outlined-required"
                    variant="outlined"
                    size='small'
                    color="warning"
                    focused
                    label="City Name"
                onChange={(e) => setCityName(e.target.value)}
                />
                <CssTextField
                    sx={{ color: " #F7701D", width: "95%" }}
                    id="outlined-required"
                    variant="outlined"
                    size='small'
                    color="warning"
                    focused
                    label="State Name"
                onChange={(e) => setStateName(e.target.value)}
                />
                <CssTextField
                    sx={{ color: " #F7701D", width: "95%" }}
                    id="outlined-required"
                    variant="outlined"
                    size='small'
                    color="warning"
                    focused
                    label="Country Name"
                onChange={(e) => setCountryName(e.target.value)}
                />
                <CssTextField
                    sx={{ color: " #F7701D", width: "95%" }}
                    id="outlined-required"
                    variant="outlined"
                    size='small'
                    color="warning"
                    focused
                    label="Latitude"
                onChange={(e) => setLatitude(e.target.value)}
                />
                <CssTextField
                    sx={{ color: " #F7701D", width: "95%" }}
                    id="outlined-required"
                    variant="outlined"
                    size='small'
                    color="warning"
                    focused
                    label="Longitude"
                onChange={(e) => setLongitude(e.target.value)}
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

export default Addcity