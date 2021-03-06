import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Resume from './ResumeComponent';

class SideNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !(this.state.isNavOpen)
        });
    }

    render() {
        return (
            <React.Fragment >
                <h3 id="name" > Utkal </h3>
                <Navbar expand="md">

                    <NavbarToggler onClick={this.toggleNav} >
                        <img src="/images/menu.svg" height="30px" width="40px" alt="toggle menu"/>
                    </NavbarToggler>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>

                            <NavItem>
                                <NavLink to="/home"> Home </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink to="/projects"> Projects </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/skills"> Skills </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/profiles"> Profiles </NavLink>
                            </NavItem>

                            <button type="button" class="btn btn-light" id="get-resume-button">
                                <Resume resume={this.props.resume}/>
                            </button>

                        </Nav>

                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default SideNavbar;