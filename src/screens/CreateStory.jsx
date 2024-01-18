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
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import "../css/CreateBlogsPost.css"
import { createBlogPosts, createStoryPosts } from "../redux/Action/CommonAction";
import { CssTextField } from "../css/MUI/MuiInputCss/MuiInput";


export default function CreateStory() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [userid, setUserID] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formdata = new FormData();
    formdata.append('USER_ID', userid);
    formdata.append('YOUTUBE_LINK', title);
    formdata.append('FILE', file);
    formdata.append('DESCRIPTION', desc);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createStoryPosts(formdata));

        // setTitle("");
        // setHeading("");
        // setUserID("");
        // setDesc(" ");
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
                        <h3>Story Details</h3>
                        {/* <div style={{ width: "80%", display: "flex", flexDirection: "row", alignItems: "center" }}>
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
                        </div> */}
                        <CssTextField
                            sx={{ color: " #F7701D", width: "50%" }}
                            id="outlined-required"
                            variant="standard"
                            color="warning"
                            focused
                            label="USER ID"
                            // value={title}
                            onChange={(e) => setUserID(e.target.value)}
                        />
                        <CssTextField
                            sx={{ color: " #F7701D", width: "50%" }}
                            id="outlined-required"
                            variant="standard"
                            color="warning"
                            focused
                            label=" Youtube link"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Button
                            sx={{
                                width: "80%",
                                height: "6vh",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "3rem",
                                mt: 2,
                                mb: 2,
                                textTransform: "none",
                                border: "1px dashed #F7701D",
                                color: "#000000",
                                "&:hover": {
                                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                                },
                            }}
                            color="warning"
                            variant="outlined"
                            component="label"
                        >
                            <CloudUploadIcon color="warning" sx={{ transform: "scale(1.5)" }} />
                            Upload Story Image
                            <input 
                            // hidden
                                accept="image/*"
                                // multiple 
                                type="file"
                                onChange={(e) =>{
                                    setFile(URL.createObjectURL(e.target.files[0]))
                                    // setFileName(e.target.files[0])

                                } 
                            }
                                name="CV" />
                        </Button>
                        <CssTextField
                            sx={{ color: " #F7701D", width: "70%" }}
                            required
                            color="warning"
                            variant="standard"
                            multiline
                            rows={3}
                            focused
                            label="Story Description"

                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
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
                            Save
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    );
}
