import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-around header h1 bg-secondary text-white">
        <div className="m-3">
          <FontAwesomeIcon icon={faReddit} /> &nbsp;
          
        </div>
      </div>
    </>
  );
};

export default Header;
