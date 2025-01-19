import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Course</h2>
        <UserContext.Consumer>
          {({ loggedinUser }) => (
            <h2 className="font-bold">Name of User: {loggedinUser}</h2>
          )}
        </UserContext.Consumer>
        <UserClass2
          name={"First"}
          location={"Hyd"}
        />
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
