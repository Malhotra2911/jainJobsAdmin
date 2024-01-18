import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import { addSkill } from '../../redux/Action/CommonAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 3,
    pl:3,
    pr:3,
    pb:2,
    borderRadius:2,
    background: "linear-gradient(to right,white, #99ebeb)",
};

export default function AddSkills() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [skill,setSkill] = React.useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        dispatch(addSkill(skill))
        setSkill("");
        setOpen(false)
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                type="button"
                sx={{
                    width: "auto",
                    height: "5vh",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                    },
                }}
            >
                Add new Skill
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <h3>Add a new skill</h3>
                    <TextField
                        focused
                        margin="dense"
                        color='warning'
                        sx={{mt:3}}
                        id="name"
                        label="Add new Skill"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={skill}
                        onChange={(e)=> setSkill(e.target.value)}
                    />
                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",marginTop:"1rem"}}>
                    <Button onClick={handleClose} sx={{
                        width: "auto",
                        height: "5vh",
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                    }}>Cancel</Button>
                    <Button onClick={handleSubmit} sx={{
                        width: "auto",
                        height: "5vh",
                        ml:2,
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                    }}>Submit</Button>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}
