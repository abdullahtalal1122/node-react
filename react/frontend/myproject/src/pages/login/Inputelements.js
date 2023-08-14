import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Inputelements = (props) => {
  return (
    <div>
      <input
        className="forms-item form-item-1"
        type="email"
        placeholder="Email"
        value={props.email}
        onChange={(event) => props.setEmail(event.target.value)}
      />
      <FontAwesomeIcon icon={faEnvelope} className="icons" />
      <input
        className="forms-item form-item-2"
        type="password"
        placeholder="Password"
        value={props.password}
        onChange={(event) => props.setPassword(event.target.value)}
      />
      <FontAwesomeIcon icon={faLock} className="icons" />
    </div>
  );
};

export default Inputelements;
