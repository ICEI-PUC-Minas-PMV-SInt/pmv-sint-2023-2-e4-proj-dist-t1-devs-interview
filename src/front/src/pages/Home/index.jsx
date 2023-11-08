import React from "react";
import { useSelector } from "react-redux";
import ListQuizzes from "./components/ListQuizzes";
import Welcome from "./components/Welcome";

const Home = () => {
  const { name } = useSelector((state) => state.user);
  return (
    <>
      {name && <ListQuizzes />}
      {!name && <Welcome />}
    </>
  );
};

export default Home;
