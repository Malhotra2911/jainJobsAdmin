import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OtherFeedback from "./OtherFeedback";
import CreateStory from "../CreateStory";
import StoryTable from "./StoryTable";
import JobSeekerUser from "../JobSeekerUser";
import AvailableJobSeeker from "../Jobseeker/AvailableJobSeeker";
import SubscribedJobSeeker from "../SubscribedJobSeeker";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BlogAndStory() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ gap: "0.6rem", width: "100%" }}
        >
          <Tab
            label="User Details"
            sx={{
              textTransform: "none",
              color: "white",
              background: "orange",
              fontFamily: "sans-serif",
              fontSize: "1.2rem",
              border: "1px solid white",
            }}
            {...a11yProps(0)}
          />

          <Tab
            label="Applied Jobs"
            sx={{
              textTransform: "none",
              color: "white",
              background: "orange",
              fontFamily: "sans-serif",
              fontSize: "1.2rem",
              border: "1px solid white",
            }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <JobSeekerUser />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AvailableJobSeeker />
      </TabPanel>
    </Box>
  );
}
