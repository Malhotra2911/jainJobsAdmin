import React, { useState } from "react";
import AdminSidebar from '../components/AdminSidebar'
import ProfileBar from '../components/ProfileBar'
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import "../css/CreateBlogsPost.css"
import { createBlogPosts, createStoryPosts } from "../redux/Action/CommonAction";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#F7701D",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#F7701D",
        color: "#F7701D",
    },
    "& .MuiInput-underline": {
        borderBottomColor: "#F7701D",
        color: "#F7701D",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#F7701D",
            color: "#F7701D",
        },
        "&:hover fieldset": {
            borderColor: " #F7701D",
            color: "#F7701D",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#F7701D",
            color: "#F7701D",
        },
    },
});

export default function AddSubscription() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [heading, setHeading] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createStoryPosts(title, desc, heading));

        setTitle("");
        setHeading("");
        setDesc(" ");
        // if (file) {
        //   const data =new FormData();
        //   const filename = Date.now() + file.name;
        //   data.append("name", filename);
        //   data.append("file", file);
        //   newPost.photo = filename;
        //   try {
        //     await axios.post("/upload", data);
        //   } catch (err) {}
        // }
        // try {
        //   const res = await axios.post("/posts", newPost);
        //   window.location.replace("/post/" + res.data._id);
        // } catch (err) {}
    };
    return (
        <>
            <div className="write" style={{ width: "98%" }}>
                <form className="writeForm" onSubmit={handleSubmit}>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "80%" },
                            width: "80%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            zIndex: 0,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3>Add Subscription</h3>
                        <div style={{ width: "80%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div style={{ width: "60%", marginLeft: "-5px" }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    focused
                                    color="warning"
                                    variant="standard"
                                    label="User Id"
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                />
                            </div>


                            <InputBase
                                sx={{ flex: 1, border: "2px solid orange", height: '30px', borderRadius: 3 }}
                                placeholder="Search User id by name"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            >

                            </InputBase>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <FormControl variant="standard" sx={{ m: 1, width: "80%" }}>
                            <InputLabel color='warning' sx={{color:"orange"}} id="demo-simple-select-standard-label">Choose a Plan</InputLabel>
                            <Select

                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                color="warning"
                                variant="standard"
                                focused
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                sx={{
                                    width: "100%",
                                    borderStyle:"none none solid none",
                                    border:"10px red",
                                    color:"orange",
                                    "&:hover": { color: "rgba(247, 112, 29, 0.39)" },
                                    // "&.MuiSelect-standard": {
                                    //     color: "orange"
                                    // },
                                    "& .MuiSelect-standard:after":{
                                        color:"orange",
                                        border:'12px solid red',
                                        background:"red"
                                    },
                                    "& .MuiSelect-standard:before":{
                                        color:"orange",
                                        background:"red",
                                        borderColor:"red",
                                    }


                                }}
                                label="Choose a Plan"
                            >
                                <MenuItem value="">
                                    {/* <em>None</em> */}
                                </MenuItem>
                                <MenuItem value={10}>800 for 1 month</MenuItem>
                                <MenuItem value={20}>2250 for 3 months</MenuItem>
                                <MenuItem value={30}>4200 for 6 months</MenuItem>
                                <MenuItem value={10}>5400 for 9 months</MenuItem>
                                <MenuItem value={20}>1300 for 20 days</MenuItem>
                                <MenuItem value={30}>3750 for 3 months</MenuItem>
                                <MenuItem value={10}>7200 for 6 months</MenuItem>
                                <MenuItem value={20}>9900 for 9 months</MenuItem>
                                <MenuItem value={30}>300 for 1 month</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            className="profile_btn"
                            onClick={handleSubmit}
                            type="button"
                            sx={{
                                width: "70%",
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
                            Submit
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    );
}
