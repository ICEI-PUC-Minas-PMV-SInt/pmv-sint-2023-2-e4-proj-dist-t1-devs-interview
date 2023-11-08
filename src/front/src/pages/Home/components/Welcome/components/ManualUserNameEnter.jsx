import { Box, Button, TextField } from "@mui/material";

export const ManualUserNameEnter = ({ onComplete }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // TODO: prevenir caso o nome não esteja preenchido ou seja inválido
    onComplete(data.get("name"));
  };

  return (
    <Box mt="8px">
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="12px">
          <TextField
            fullWidth
            name="name"
            variant="outlined"
            label="Seu nome"
            placeholder="Digite o nome aqui"
          />
          <Button variant="contained" fullWidth type="submit">
            Continuar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ManualUserNameEnter;
