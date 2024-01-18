import "../css/ProfileBar.css";
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const ProfileBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnClickPass = () => {
    navigate("/resetpassword",{replace:"true"})

  }

  const _logoutfun = () => {
    var mytoken = sessionStorage.getItem("token");
    // alert(mytoken);
    // return false;
    if (mytoken) {
      sessionStorage.removeItem("token");
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 500);
    }
  };

  return (
    <>
      <div className="Jobseekerdashboard-Row">
        <div className="JOBS-Section">
          <div className="Profile-Tab">
            <div className="Profile_Tab_Left">
              <div style={{ display: "flex" }}>
                <h3 className="welcome_part">Welcome:</h3>  
                <h3>
                  <span style={{ color: "#F27E32" }}>JAIN</span>
                  <span style={{ color: '#15B9B8' }}>JOBS</span>
                  <span style={{ color: "#F7711C" }}>PORTAL</span>
                </h3>

              </div>
            </div>
            <div className="Profile_Tab_Right">
              {/* <div
                className="Profile-Section"
                style={{ visibility: "visible" }}
              >
                <Avatar src="/broken-image.jpg" />
              </div> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 42, height: 42 }}>JK</Avatar>
                </IconButton>
              </Tooltip>
              {/* <div className="clock">
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleOnClickPass}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={_logoutfun}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileBar;
