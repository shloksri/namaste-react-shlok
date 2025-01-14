import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";

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
        {/* <UserClass
          name={"Shlok Srivastava (classes)"}
          loction={"Hyderabad Classes"}></UserClass> */}
        <UserClass2
          name={"First"}
          location={"Hyd"}
        />
        {/* <UserClass2
          name={"Second"}
          location={"Hyd"}
        />
        <UserClass
          name={"Third"}
          location={"Hyd"}
        /> */}
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
