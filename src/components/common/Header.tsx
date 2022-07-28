import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import "./Header.css";

// Vinayak: Renders Header with logo, name and nav links
export function Header(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div data-testid="header">
            <Navbar {...props}>
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="./dnd.jpg"
                        style={{
                            height: 40,
                            width: 40,
                            margin: "0 15px",
                        }}
                    />
                    DnD Spells
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Navigation />
                </Collapse>
            </Navbar>
        </div>
    );
}
