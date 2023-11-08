import EmptyImg from "@/assets/empty.svg";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export const EmptyState = () => (
  <Box
    className="animate__animated animate__fadeInUp"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    }}
  >
    <img src={EmptyImg} width="200px" />
    <Typography>Você ainda não possui histórico</Typography>
    <Button to="/" component={Link}>
      Ver quizzes
    </Button>
  </Box>
);

export default EmptyState;
