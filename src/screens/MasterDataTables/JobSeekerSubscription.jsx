import * as React from "react";
import "../../css/JobSeekerSubscription.css";
import { Avatar, Button } from "@mui/material";
import JSSubscription from "../InputDialog/JSSubscription";

const JobSeekerSubscription = () => {
  const [open, setOpen] = React.useState();

  const [isplantype, setisplantype] = React.useState(null);

  const handleOnClick = (plantype) => {
    setOpen(true);
    setisplantype(plantype);
  };
  return (
    <>
      <div className="subscription_admin">
        <div className="subscription_card">
          <h3 className="plan_heading">Basic Plan</h3>
          <Button
            variant="contained"
            className="profile_btn"
            onClick={() => handleOnClick("BASICPLAN")}
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
        <div className="subscription_card">
          <h3 className="plan_heading">Premium Plan</h3>
          <Button
            variant="contained"
            className="profile_btn"
            onClick={() => handleOnClick("PRIMIUMPLAN")}
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
        <div className="subscription_card">
          <h3 className="plan_heading">Job Assurance Plan</h3>
          <Button
            variant="contained"
            className="profile_btn"
            onClick={() => handleOnClick("JOBASSURANCE")}
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

        {open && <JSSubscription isplantype={isplantype} Open={setOpen} />}
      </div>
    </>
  );
};

export default JobSeekerSubscription;
