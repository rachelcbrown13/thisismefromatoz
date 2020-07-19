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
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="profile.html">Profiles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="colorpage.html">Coloring Pages</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="aboutAuthor.html">About the Author</a>
          </li>
        </ul>
        {/* <!-- Purchase Modal Trigger --> */}
        <Button className="btn btn-outline-info" type="button" data-toggle="modal" data-target="#purchaseModal">Purchase</Button>
      </div>
    </nav>
    );
  }
}



export default NavBar;