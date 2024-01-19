import React, { Component } from "react";
import {
  MainProjectContent
} from "./MainProjectStyle";

interface Props {
  
}

class MainProject extends Component<Props> {
  render() {
    return (
      <MainProjectContent id="main-project">
        Main Project
      </MainProjectContent>
    );
  }
}

export default MainProject;