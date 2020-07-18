import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavLink, Button} from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <NavbarBrand className="navbar-brand" href="/">This is ME from A to Z</NavbarBrand>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <Nav className="navbar-nav mr-auto">
                <NavLink className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </NavLink>
                <NavLink className="nav-item">
                  <a className="nav-link" href="profile.html">Profiles</a>
                </NavLink>
                <NavLink className="nav-item">
                  <a className="nav-link" href="colorpage.html">Coloring Pages</a>
                </NavLink>
                <NavLink className="nav-item">
                    <a className="nav-link" href="aboutAuthor.html">About the Author</a>
                </NavLink>
              </Nav>
        {/* Purchase Modal Trigger */}
              <Button className="btn btn-outline-info" type="button" data-toggle="modal" data-target="#purchaseModal">Purchase</Button>
            </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default NavBar;