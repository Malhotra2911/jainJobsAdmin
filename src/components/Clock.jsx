import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var time;

  useEffect(() => {
    time = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(time);
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 70,
            height: 50,
            mt: 1.7,
          },
        }}
      >
        <Paper variant="outlined" sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "#000000" } }}
          >
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Clock;
