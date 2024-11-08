"use client";

import { useEffect, useState } from "react";
import { Navbar as ReactNavbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { sansitaSwashed } from "../../app/layout";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Trigger re-render after client-side mount
  }, []);

  if (!isClient) {
    return null; // You can render a fallback like a static navbar or loading state here
  }

  return (
    <ReactNavbar bg="light" expand="lg">
      <ReactNavbar.Brand
        as={Link}
        href="/"
        className={sansitaSwashed.className}
        style={{
          fontSize: "1.8em",
        }}
      >
        Date Night
      </ReactNavbar.Brand>
      <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} href="/login">
            Login
          </Nav.Link>
          {/* You can add more Nav.Link components here if needed */}
        </Nav>
      </ReactNavbar.Collapse>
    </ReactNavbar>
  );
};

export default Navbar;
