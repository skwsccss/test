import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../logo.png'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="white" light expand="md" className="d-flex px-4 py-3">
                <NavbarBrand href="/">
                    <img src={logo} alt="logo" className="mx-4" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="float-right p-4 mr-5">
                    <Nav className="ml-auto mr-5" navbar>
                        <NavItem className="mx-3">
                            <NavLink href="#" className="px-4 py-1">Portal</NavLink>
                        </NavItem>
                        <NavItem className="mx-3">
                            <NavLink href="#" className="px-4 py-1">About Us</NavLink>
                        </NavItem>
                        <NavItem className="mx-3">
                            <NavLink href="#" className="px-4 py-1">Contact Now</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" active className="px-4 py-1">
                                    Login
                            </NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
