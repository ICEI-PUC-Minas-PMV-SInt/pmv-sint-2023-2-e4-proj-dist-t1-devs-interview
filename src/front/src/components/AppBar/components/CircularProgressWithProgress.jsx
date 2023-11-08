import { Box, CircularProgress, Typography } from "@mui/material";
import { green, grey, orange, red, yellow } from "@mui/material/colors";
import React from "react";
import { getPercent } from "../../../pages/Score/components/QuizCard";

const CircularProgressWithProgress = ({ score = 0, total = 0, ...props }) => {
  const calculatedPercent = getPercent(score, total);
  const progressValue = calculatedPercent || 0;
  console.log(score, total);

  const getProgressColor = () => {
    if (progressValue === 0) return grey[400];
    if (progressValue < 30) return red[500];
    if (progressValue < 50) return orange[500];
    if (progressValue < 70) return yellow[500];
    if (progressValue < 90) return yellow[700];
    return green[500];
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <CircularProgress
        variant="determinate"
        size={80}
        sx={{ color: getProgressColor() }}
        value={getPercent(score, total)}
      />
      <Typography sx={{ position: "absolute" }}>
        {`${score}/${total}`}
      </Typography>
    </Box>
  );
};

export default CircularProgressWithProgress;
