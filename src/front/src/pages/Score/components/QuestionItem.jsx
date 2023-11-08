import { green, grey, red } from "@mui/material/colors";
import { Box, Chip, Typography } from "@mui/material";

const Correct = () => (
  <Chip label="Correta" sx={{ background: green["600"], color: "white" }} />
);

const Wrong = () => (
  <Chip label="Errada" sx={{ background: red["600"], color: "white" }} />
);

const Empty = () => (
  <Chip label="Sem resposta" sx={{ background: grey["500"], color: "white" }} />
);

const QuestionItem = ({ question, index }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
    }}
  >
    <Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          <b>Questão {index + 1}</b>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{question.description}</Typography>
      </Box>
    </Box>
    {!question.answered ? (
      <Empty />
    ) : question.isCorrect ? (
      <Correct />
    ) : (
      <Wrong />
    )}
  </Box>
);

export default QuestionItem;
