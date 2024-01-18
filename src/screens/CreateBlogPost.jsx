import React, { useState } from "react";
import AdminSidebar from '../components/AdminSidebar'
import ProfileBar from '../components/ProfileBar'
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "../css/CreateBlogsPost.css"
import { createBlogPosts } from "../redux/Action/CommonAction";
import { CssTextField } from "../css/MUI/MuiInputCss/MuiInput";


export default function CreateBlogPost() {
    const [desc, setDesc] = useState("");
    const [heading, setHeading] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    
    const formdata = new FormData();
    formdata.append('HEADING', heading);
    formdata.append('DESCRIPTION', desc);
    formdata.append('FILE', file);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        dispatch(createBlogPosts(formdata));
        window.location.reload();
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
                        <h3>Add Blog Details</h3>
                        <TextField
                            // sx={{pr:8,pl:8}}
                            required
                            id="outlined-required"
                            focused
                            color="warning"
                            variant="standard"
                            label="Blog Heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                        />
                        {/* <CssTextField
                            sx={{ color: " #F7701D", width: "50%" }}
                            required
                            id="outlined-required"
                            variant="standard"
                            color="warning"
                            focused
                            label=" Blog Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> */}
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
                            }}
                            color="warning"
                            variant="outlined"
                            component="label"
                        >
                            <CloudUploadIcon color="warning" sx={{ transform: "scale(1.5)" }} />
                            Upload Blog Image
                            <input  accept="image/*"
                                onChange={(e) => setFile(e.target.value)}
                                multiple type="file" name="CV" />
                        </Button>
                        <CssTextField
                            sx={{ color: " #F7701D", width: "70%" }}
                            required
                            color="warning"
                            variant="standard"
                            multiline
                            rows={3}
                            focused
                            label="Description"

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
                                mt: 1,
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
            {/* </div>
            </div> */}
        </>
    );
}
