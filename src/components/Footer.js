import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <div className="footer">
        <a
          className="footer__link"
          href="https://www.behance.net/ruhulaminhira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-behance"></i>
        </a>
        <p className="footer__text">Find me</p>

        <p className="footer__text">2021, Created by Ruhul Amin</p>
      </div>
    </Container>
  );
};

export default Footer;
