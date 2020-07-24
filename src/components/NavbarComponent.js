import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Button, Collapse,
  Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col, Container} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <NavbarBrand href="index.html">This is ME from A to Z</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav}/> 
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/profiles'>Profiles</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/about">About the Author</NavLink>
                </NavItem>
            </Nav> 
          </Collapse>
          {/* <!-- Purchase Modal Trigger --> */}
          <Button color="info" outline onClick={this.toggleModal}>Purchase</Button>
      </Navbar>
{/* Purchase Modal */}
  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal} className="bg-danger text-white">
              <Label>Purchase</Label>
            </ModalHeader>
            <ModalBody>
                <Form>
                  <Row>
                    <Col sm="4">
                        <img src={require("../img/FrontCover.png")} width="150" className="img-thumbnail"/>
                    </Col>
                    <Col md="4">
                        <input size="30" type="number" placeholder="Quantity"/>
                    </Col>
                    <Col md="4">
                        Price: <input/> <br/>
                        Shipping: <input/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <img src={require("../img/ActivityBookFrontCover.png")} width="150" className="img-thumbnail"/>
                    </Col>
                    <Col sm="2">
                      <input type="number" placeholder="Quantity"/>
                    </Col>
                    <Col>
                      Total: <input type="text"/>
                      <button type="submit" className="btn btn-success btn-lg">Purchase Here!</button>
                    </Col>
                  </Row>
                </Form> 
            </ModalBody>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            <div className="justify-content-bottom">
              <p>But really, if you want to purchase the books <a href="https://www.amazon.com/This-Me-Z-Rachel-Brown-ebook/dp/B089PT13ZZ/ref=sr_1_3?dchild=1&keywords=rachel+chardea+brown&qid=1592015642&sr=8-3" target="_blank">CLICK HERE</a></p>
            </div>
      </Modal>
    </React.Fragment>
    );
  }
}



export default NavBar;