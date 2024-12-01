import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Something Went wrong! Looks like this page doesn't exist.</h2>
      <h3>
        {err.status}: {err.statusText} <br />
        {err.data}
      </h3>
    </div>
  );
};

export default Error;
