import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Course</h2>
      <UserClass
        name="Shlok Srivastava (classes)"
        location="Hyderabad classes"
      />
    </div>
  );
};

export default About;
