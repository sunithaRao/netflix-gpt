import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  console.log("In App Js");
  console.log(process.env.NODE_ENV);

  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
};

export default App;
