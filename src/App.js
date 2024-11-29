import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Header2 from "./components/Header2";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Header2></Header2> */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
