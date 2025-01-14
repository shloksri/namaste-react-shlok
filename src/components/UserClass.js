import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 1,
      name: "Shlok",
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state; //destructuring state variables
    console.log(name + "Child Render");

    return (
      <div className="user-card">
        <h1>Class based component</h1>
        <h3>Count = {count}</h3>

        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}>
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @shloksri</h3>
      </div>
    );
  }
}

export default UserClass;
