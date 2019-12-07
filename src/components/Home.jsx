import React from "react";
import { Slide } from "@material-ui/core";
import Landing from "./Landing";
import NewBooks from "./NewBooks";

const Home = () => {
  return (
    <Slide in={true} direction="right" mountOnEnter unmountOnExit>
      <div>
        <Landing />
        <NewBooks />
      </div>
    </Slide>
  );
};

export default Home;
