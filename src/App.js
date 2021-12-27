import React from "react";
import { emailInfo } from "./data";
import Inbox from "./components/Inbox";
import "./index.css";

const App = () => {
  return <Inbox email={emailInfo} />;
};

export default App;
