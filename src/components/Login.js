import { useState } from "react";

const Login = () => {
  const [btn, setBtn] = useState("Login");
  //   console.log("Login rendered");
  //   console.log(`Button text = ${btn}`);

  return (
    <button
      onClick={() => {
        btn === "Login" ? setBtn("Logout") : setBtn("Login");
      }}>
      {btn}
    </button>
  );
};

export default Login;
