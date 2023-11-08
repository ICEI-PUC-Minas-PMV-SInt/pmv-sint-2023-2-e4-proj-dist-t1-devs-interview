import { useEffect } from "react";
import { appEmitter, EventTypes } from "@/config/events";
import { useDispatch } from "react-redux";
import { updatePreferDark } from "../store/features/user";

const ChangeThemeHandler = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(updatePreferDark());
  };

  appEmitter.addListener(EventTypes.CHANGE_THEME, handleThemeChange);
  useEffect(() => {}, []);

  return null;
};

export default ChangeThemeHandler;
