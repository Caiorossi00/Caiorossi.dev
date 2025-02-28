import React from "react";
import "../assets/scss/Stack.scss";
import StackInfo from "../components/Stack/StackInfo";
import StackDisplay from "../components/Stack/StackDisplay";

const Stack = () => {
  return (
    <div id="Stack">
      <StackInfo />
      <StackDisplay />
    </div>
  );
};

export default Stack;
