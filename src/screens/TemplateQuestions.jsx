import { Button } from '@mui/material'
import * as  React from 'react'
import { useDispatch } from 'react-redux'
import { CssTextField } from '../css/MUI/MuiInputCss/MuiInput'
import '../css/TemplateQuestions.css'
import { createQuestion } from '../redux/Action/CommonAction'
import AdminSidebar from '../components/AdminSidebar'
import "../css/TemplateQuestions.css"
import ProfileBar from '../components/ProfileBar'
import TempQuestions from './MasterDataTables/TemQuestions'

export const TemplateQuestions = () => {
    const [question1, setQuestion] = React.useState();
    const dispatch = useDispatch();



    const handleSubmit = () => {
        dispatch(createQuestion(question1));
        window.location.reload();

    }

    return (
        <>
            <div className="background_img">
                <div className="admin_dashboard_container">
                    <AdminSidebar />
                    <div className="admin_dashboard_content">
                        <ProfileBar />
                        <div className="template_content">
                            <h3 className="template_questions_heading">
                                Add Template Questions
                            </h3>
                            <div className="template_questions_main_contents">
                                <CssTextField
                                    sx={{ color: " #F7701D", width: "50%" }}
                                    id="outlined-required"
                                    variant="outlined"
                                    size='small'
                                    color="warning"
                                    multiline
                                    rows={3}
                                    focused
                                    label="Add a new Question"
                                    onChange={(e) => setQuestion(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    className="profile_btn"
                                    onClick={handleSubmit}
                                    type="button"
                                    sx={{
                                        width: "30%",
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
                            <TempQuestions />
                        </div>
                        {/* <div className="template_questions"> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
