import "./topbar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" onClick={() => setMenuOpen(false)}>
            Doe.
          </a>
          <div className="itemContainer">
            <a href="#intro">
              <LinkedInIcon className="icon" />
              <span>@JohnDoe</span>
            </a>
          </div>

          <div className="itemContainer">
            <a href="#intro">
              <MailIcon className="icon" />
              <span>johndoe@test.com</span>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
