import {
  Box,
  Collapse,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { goToNotFound } from "@/pages/NotFound";
import useQuestionStoreHandler, {
  useQuestionGetter,
} from "./hooks/useQuestionStoreHandler";
import { EndButtons } from "./components/EndButtons";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import "animate.css";
import Loading from "@/components/Loading";

const helpText =
  "Houve um problema ao mostrar o enunciado dessa questão ou ele está vazio, por favor contate o suporte";

const Question = () => {
  const { data: currentQuestion, isLoading } = useQuestionGetter();
  const currentQuestionIndex = currentQuestion?.index ?? "";
  const quizTitle = currentQuestion?.quizTitle ?? "";
  const quizId = currentQuestion?.quizId ?? "";
  const { realizedQuizes, preferDark } = useSelector((state) => state.user);

  const { handleUpdateQuestionAnswer } = useQuestionStoreHandler();

  if (isLoading) {
    return <Loading />;
  }

  if (!currentQuestion) {
    return goToNotFound();
  }

  const handleChangeSelectedOption = ({ target: { value } }) => {
    handleUpdateQuestionAnswer(value, currentQuestion);
  };

  const getQuestionValue = () => {
    const quizRealized = realizedQuizes?.find((quiz) => quiz.idQuiz === quizId);

    if (!quizRealized) {
      return null;
    }
    const questionRealized = quizRealized.answers.find(
      (question) => question.idQuestion === currentQuestion.idQuestion
    );

    if (!questionRealized) {
      return null;
    }

    return questionRealized.answer;
  };

  const questionAlternativeStyle = (selected) => ({
    my: "10px",
    backgroundColor: preferDark ? "#2e2e2e" : "#f7f7f7",
    borderRadius: "10px",
    filter: selected ? "brightness(0.9)" : "",
    py: "10px",
    pl: "10px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "brightness(0.9)",
      // backgroundColor: "#f7f7bb",
    },
    flex: "1",
    width: "100%",
  });

  const questionAnswerValue = getQuestionValue();

  return (
    <Box
      display="flex"
      className="animate__animated animate__fadeInUp"
      flexDirection="column"
      gap="10px"
    >
      <Typography element="h2" variant="h6">
        Questão {currentQuestionIndex + 1} | Quiz {quizTitle}
      </Typography>
      <Typography element="p" variant="body2">
        {currentQuestion?.description || helpText}
      </Typography>

      <Box>
        <RadioGroup
          value={questionAnswerValue}
          onChange={handleChangeSelectedOption}
        >
          <TransitionGroup>
            {currentQuestion?.options.map((option, index) => (
              <Collapse key={option + index}>
                <FormControlLabel
                  sx={questionAlternativeStyle(
                    questionAnswerValue
                      ? +questionAnswerValue === +index
                      : false
                  )}
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </RadioGroup>
      </Box>
      <EndButtons />
    </Box>
  );
};

export default Question;
