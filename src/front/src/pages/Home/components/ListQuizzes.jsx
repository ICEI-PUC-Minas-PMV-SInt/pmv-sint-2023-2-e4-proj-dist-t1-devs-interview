import React from "react";
import { Button, Box, TextField, Collapse, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { matchSorter } from "match-sorter";
import { TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "@/store/features/user";
import useQuizzes from "@/api/hooks/useQuizzes";
import Loading from "@/components/Loading";

/**
 * Onde são listados os Quizzes
 * @returns
 */
const ListQuizzes = () => {
  const { search, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setSearch = (e) => {
    dispatch(updateSearch(e));
  };

  const { data = [], isLoading } = useQuizzes(search);

  const sortedList = matchSorter(data ?? [], search, {
    keys: ["title"],
  });

  return (
    <>
      <Box
        className="animate__animated animate__fadeInUp"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Box>
          <Typography variant="h4">Olá, {name}</Typography>
          <Typography variant="subtitle1">
            Você pode entrar em um quiz escolhendo uma das opções abaixo
          </Typography>
        </Box>
        <TextField
          label="Buscar..."
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <Collapse in={isLoading}>
          <Loading />
        </Collapse>
        <Collapse in={!isLoading}>
          <TransitionGroup>
            {(search ? sortedList : data).map(({ title, questions }) => (
              <Collapse key={title} sx={{ width: "100%" }}>
                <Button
                  sx={{ width: "100%", my: 1 }}
                  component={Link}
                  to={`/questao/${questions[0]?.idQuestion}`}
                  variant="contained"
                >
                  {title}
                </Button>
              </Collapse>
            ))}
          </TransitionGroup>
        </Collapse>
      </Box>
    </>
  );
};

export default ListQuizzes;
