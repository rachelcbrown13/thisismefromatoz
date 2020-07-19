import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Button, Collapse} from 'reactstrap';

class NavBar extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
        isNavOpen: false,
        isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="index.html">This is ME from A to Z</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" href="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="/profiles">Profiles</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" href="/about">About the Author</NavLink>
          </li>
        </ul>
        {/* <!-- Purchase Modal Trigger --> */}
        <button className="btn btn-outline-info" type="button" data-toggle="modal" data-target="#purchaseModal">Purchase</button>
      </div>
    </nav>
    );
  }
}



export default NavBar;