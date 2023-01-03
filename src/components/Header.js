import "../components/Header.css";
import Typed from "react-typed";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Frontend Developement</h1>
        <Typed
          className="typed-text"
          strings={[
            "ReactJs Developer",
            "Web Developement",
            "UI/UX Designer",
            "Adobe Photoshop",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Button className="btn" variant="outline-light">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Header;
