import { Box, Button, Typography } from "@mui/material";
import NotFoundImage from "@/assets/not_found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      className="animate__animated animate__fadeInUp"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        width: "50%",
        margin: "0 auto",
        gap: "20px",
        height: "100%",
      }}
    >
      <img
        width="100%"
        alt="ilustração que representa um ambiente vazio: montanhas com um sol e nuvens atrás em tons de cinza, branco e azul com o escrito 404 em letras grandes"
        src={NotFoundImage}
      />
      <Typography component="h1" variant="body2">
        Página não encontrada ou questão com identificador errado
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Ir ao início
      </Button>
    </Box>
  );
};

export const goToNotFound = () => <NotFound />;

export default NotFound;
