import * as React from 'react'
import "../../css/JobSeekerSubscription.css"
import { Avatar, Button } from '@mui/material'
import JSSubscription from '../InputDialog/JSSubscription';
import EmployerSubscription from '../InputDialog/EmployerSubscriptionModal';

const JobSeekerSubscription = () => {
    const [open, setOpen] = React.useState();
    const handleOnClick = () => {
        setOpen(true);

    }
    return (
        <>
            <div className="subscription_admin">
                <div className="subscription_card_employer">
                    <h3 className="plan_heading">
                        Instant Hiring
                    </h3>
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleOnClick}
                        type="button"
                        sx={{
                            width: "15%",
                            height: "5vh",
                            textTransform: "none",
                            borderRadius: "20px",
                            // mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Create
                    </Button>

                </div>
                <div className="subscription_card_employer">
                    <h3 className="plan_heading">
                        Combo Hiring
                    </h3>
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleOnClick}
                        type="button"
                        sx={{
                            width: "15%",
                            height: "5vh",
                            textTransform: "none",
                            borderRadius: "20px",
                            // mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Create
                    </Button>
                </div>
                <div className="subscription_card_employer">
                    <h3 className="plan_heading">
                        Create My Own Plan
                    </h3>
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleOnClick}
                        type="button"
                        sx={{
                            width: "15%",
                            height: "5vh",
                            textTransform: "none",
                            borderRadius: "20px",
                            // mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Create
                    </Button>
                </div>
                <div className="subscription_card_employer">
                    <h3 className="plan_heading">
                        Pay Per Click
                    </h3>
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleOnClick}
                        type="button"
                        sx={{
                            width: "15%",
                            height: "5vh",
                            textTransform: "none",
                            borderRadius: "20px",
                            // mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Create
                    </Button>
                </div>
                <div className="subscription_card_employer">
                    <h3 className="plan_heading">
                        FMN Bid
                    </h3>
                    <Button
                        variant="contained"
                        className="profile_btn"
                        onClick={handleOnClick}
                        type="button"
                        sx={{
                            width: "15%",
                            height: "5vh",
                            textTransform: "none",
                            borderRadius: "20px",
                            // mt: 2,
                            color: "#000000",
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                            "&:hover": {
                                backgroundColor: "rgba(247, 112, 29, 0.39)",
                            },
                        }}
                    >
                        Create
                    </Button>
                </div>
                {open && <EmployerSubscription Open={setOpen} />}

            </div>

        </>
    )
}

export default JobSeekerSubscription