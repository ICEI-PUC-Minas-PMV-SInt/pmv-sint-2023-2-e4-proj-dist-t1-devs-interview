import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../../../store/features/user";
import ManualUserNameEnter from "./components/ManualUserNameEnter";
import useMarvelHeroesNames from "@/api/hooks/useMarvelHeroesNames";
import Loading from "@/components/Loading";

const Welcome = () => {
  const [isOtherNameClicked, setIsOtherNameClicked] = useState(false);
  const dispatch = useDispatch();

  const { data: MarvelHeroesNameList, isLoading } = useMarvelHeroesNames();

  const handleSelectedUsername = (username) =>
    dispatch(updateUserName(username));

  return (
    <>
      <Typography variant="h5">Primeiro, escolha seu nome</Typography>
      <Collapse in={isLoading}>
        <Loading />
      </Collapse>
      <Collapse in={!isOtherNameClicked && !isLoading}>
        <Box display="flex" flexDirection="column" gap="12px" mt="12px">
          {MarvelHeroesNameList?.map((name) => (
            <Button
              variant="contained"
              key={name}
              onClick={() => handleSelectedUsername(name)}
            >
              {name}
            </Button>
          ))}
          <Button onClick={() => setIsOtherNameClicked(true)}>
            Outro nome
          </Button>
        </Box>
      </Collapse>
      <Collapse in={isOtherNameClicked && !isLoading}>
        <ManualUserNameEnter onComplete={handleSelectedUsername} />
        <Button fullWidth onClick={() => setIsOtherNameClicked(false)}>
          Voltar às opções
        </Button>
      </Collapse>
    </>
  );
};

export default Welcome;
