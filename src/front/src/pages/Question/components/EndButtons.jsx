import { Box, Button, Collapse, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuestionGetter } from "../hooks/useQuestionStoreHandler";

export const EndButtons = () => {
  const { questions, id } = useSelector((state) => state.quiz);
  const { realizedQuizes } = useSelector((state) => state.user);

  const { data: question } = useQuestionGetter();
  const previousQuestion = question?.prevQuestionId;
  const nextQuestion = question?.nextQuestionId;

  const allQuestionsAnswered =
    realizedQuizes?.find((item) => id === item.idQuiz)?.answers?.length ===
    questions.length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "end",
      }}
    >
      <Collapse in={Boolean(previousQuestion)} sx={{ justifySelf: "start" }}>
        <Button
          component={Link}
          to={`/questao/${previousQuestion}`}
          variant="contained"
        >
          Anterior
        </Button>
      </Collapse>
      <Box>
        <Collapse in={Boolean(nextQuestion)}>
          <Button
            component={Link}
            to={`/questao/${nextQuestion}`}
            variant="contained"
          >
            Próxima
          </Button>
        </Collapse>
        <Collapse in={!nextQuestion}>
          <Tooltip title="Você precisa responder todas as questões para finalizar o quiz">
            <span>
              <Button
                color={"success"}
                disabled={!allQuestionsAnswered}
                component={Link}
                to={encodeURI(`/historico?selectedQuiz=${id}`)}
                variant="contained"
              >
                Finalizar
              </Button>
            </span>
          </Tooltip>
        </Collapse>
      </Box>
    </Box>
  );
};
