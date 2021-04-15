import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="navcontainer">
          <div className="navlogo">
            <Link to="/" className="logo">
              ColorShade
            </Link>
          </div>
          <div className="navitems">
            <NavLink
              to="/"
              exact
              activeClassName="selected-link"
              className="navlink"
            >
              Color
            </NavLink>
            <NavLink
              to="/gradient"
              exact
              className="navlink"
              activeClassName="selected-link"
            >
              Gradient
            </NavLink>
            <NavLink
              to="/selected"
              exact
              className="navlink"
              activeClassName="selected-link"
            >
              Copied Colors
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
