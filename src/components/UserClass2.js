import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        company: "Dummy loc",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount");

    const data = await fetch("https://api.github.com/users/shloksri");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    const { name, company } = this.state.userInfo;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h1>2 - Class based component</h1>

        <h2>Name: {name}</h2>
        <h3>Company: {company}</h3>
        <h3>Contact: @shloksri</h3>
      </div>
    );
  }
}

export default UserClass2;
