import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Course</h2>
        <UserClass
          name={"Shlok Srivastava (classes)"}
          loction={"Hyderabad Classes"}></UserClass>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Course</h2>
//       <UserClass
//         name="Shlok Srivastava (classes)"
//         location="Hyderabad classes"
//       />
//     </div>
//   );
// };

export default About;
