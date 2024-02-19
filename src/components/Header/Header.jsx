import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = ({ setToken }) => {
  const navigate = useNavigate();
  

  return (
    <div className="Header">
      <div className="Header-Title">
        <h1>Super Store</h1>
      </div>
      <div className="Links">
        <Link to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} size="sm" />
        </Link>
      </div>
      <button className="log-out-btn" onClick={() =>navigate('/Login')}>
        Log In
      </button>
    </div>
  );
};

export default Header;
