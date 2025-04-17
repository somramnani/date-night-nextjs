"use client";

import { useEffect, useState } from "react";
import { Navbar as ReactNavbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { sansitaSwashed } from "../../app/layout";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ReactNavbar
      bg="light"
      expand="lg"
      style={{
        boxShadow:
          "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
      }}
    >
      <ReactNavbar.Brand
        as={Link}
        href="/"
        className={sansitaSwashed.className}
        style={{
          fontSize: "1.8em",
          marginLeft: "10px",
        }}
      >
        Date Night
      </ReactNavbar.Brand>
      <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            href="/login"
            style={{
              marginRight: "5px",
            }}
          >
            <IoIosLogIn
              style={{
                fontSize: "20px",
                marginRight: "5px",
              }}
            />
            Login
          </Nav.Link>
          {/* You can add more Nav.Link components here if needed */}
        </Nav>
      </ReactNavbar.Collapse>
    </ReactNavbar>
  );
};

export default Navbar;
