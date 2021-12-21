import React from "react";
import Inbox from "./components/Inbox";
import "./index.css";

const App = () => {
  const emailInfo = {
    sender: "React Newsletter",
    subject: "React Newsletter - issue 36",
    date: "Jul 15",
    message:
      "React Newsletter issue 36 - July 15th 2016 Read this issu on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme",
  };
  return <Inbox email={emailInfo} />;
};

export default App;
