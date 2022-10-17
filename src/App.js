import logo from "./logo.svg";
import "./App.css";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
