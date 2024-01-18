import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { borderRadius } from '@mui/system';
import JobseekerContacts from './JobseekerContacts';
import EmployerContacts from './EmployerContacts';
import OtherContacts from './OtherContacts';
import CityTable from './CityTable';
import Addcity from './Addcity';

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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CitiesTables() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{gap:"0.6rem",width:"100%"}}>
                    <Tab label="City Table" color='warning' {...a11yProps(0)}
                        sx={{
                            textTransform: "none",
                            color: "white",
                            background: "orange",
                            fontFamily: "sans-serif",
                            fontSize: "1.2rem",
                            border:"1px solid white"
                        }} />
                    <Tab label="Add City"
                        sx={{
                            textTransform: "none",
                            color: "white",
                            background: "orange",
                            fontFamily: "sans-serif",
                            fontSize: "1.2rem",
                            border:"1px solid white"
                        }}
                        {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CityTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Addcity />
            </TabPanel>
        </Box>
    );
}
