import { Avatar, Box, Collapse, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useScore } from "../../../hooks/useScore";
import CircularProgressWithProgress from "./CircularProgressWithProgress";
import { userInformationStyle } from "./userInformationStyle";

export const UserInformation = () => {
  const { name = "" } = useSelector((state) => state.user);
  const {
    countHitsInPercent,
    countRealizedQuizes,
    correctAnswers,
    passedQuestions,
  } = useScore();
  return (
    <Collapse in={Boolean(name)}>
      <Box sx={userInformationStyle.box}>
        <Avatar
          src={`https://robohash.org/${name}`}
          sx={userInformationStyle.avatar}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h6" component="p">
              {name}
            </Typography>
            <Typography variant="caption" component="p" sx={{ mt: 0, pt: 0 }}>
              Quizzes realizados: {countRealizedQuizes || "--"}; Acertos:{" "}
              {countHitsInPercent || "--"}
            </Typography>
          </Box>
          <CircularProgressWithProgress
            score={correctAnswers}
            total={passedQuestions}
          />
        </Box>
      </Box>
    </Collapse>
  );
};
