import Inputelements from "./Inputelements";

const Loginform = (props) => {
  return (
    <form onSubmit={props.loginHandle}>
      <Inputelements
        email={props.email}
        setEmail={props.setEmail}
        password={props.password}
        setPassword={props.setPassword}
      />
      <div className="bottom">
        <input type="checkbox" />
        <p>Remember me</p>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Loginform;
