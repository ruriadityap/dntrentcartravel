import React from "react";
import Fade from "react-reveal/Fade";
import Button from "components/Button";
import IconText from "templates/IconText";

export default function Header(props) {
  const getNavLinkCLass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                D&TTra<span className="text-gray-900">vel.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <IconText />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkCLass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Pengalaman
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Booking
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Login
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
