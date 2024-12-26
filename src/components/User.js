const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h3>Contact: @shloksri</h3>
    </div>
  );
};

export default User;
