import { useEffect } from "react";
import { appEmitter, EventTypes } from "@/config/events";
import Swal from "sweetalert2";

const ClearUserHandler = () => {
  const handleClearUser = () => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Isso irá apagar todo o seu histórico de quizzes e resultados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire("Seus dados foram apagados", "", "success");
        window.location.reload();
      }
    });
  };
  useEffect(() => {
    appEmitter.addListener(EventTypes.CLEAR_USER, handleClearUser);
  }, []);

  return null;
};

export default ClearUserHandler;
