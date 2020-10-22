import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Button, Collapse,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, Row, Col } from 'reactstrap';
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
          <NavbarBrand className="nav-link" to="/home">This is ME from A to Z</NavbarBrand>
          
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
          <NavbarToggler onClick={this.toggleNav}/> 
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
                        <img src={require("../img/FrontCover.png")} alt="Front book cover" width="150" className="img-thumbnail"/>
                    </Col>
                    <Col md="4">
                        Quantity: <Input size="30" type="number"/>
                    </Col>
                    <Col md="4">
                        Price: <Input/> <br/>
                        
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <img src={require("../img/ActivityBookFrontCover.png")} alt="Front cover of activity book" width="150" className="img-thumbnail"/>
                    </Col>
                    <Col md="4">
                        Quantity: <Input size="30" type="number"/>
                    </Col>
                    <Col md="4">
                        Price: <Input/> <br/>
                        Shipping: <Input/>
                    </Col>
                    <Col>
                      Total: <Input type="text"/>
                      <Button type="submit" className="btn btn-success btn-lg">Purchase Here!</Button>
                    </Col>
                  </Row>
                </Form> 
            </ModalBody>
            <ModalFooter>
              <Button className="btn btn-secondary" data-dismiss="modal">Close</Button>
              <p>But really, if you want to purchase the books <a href="https://www.amazon.com/This-Me-Z-Rachel-Brown-ebook/dp/B089PT13ZZ/ref=sr_1_3?dchild=1&keywords=rachel+chardea+brown&qid=1592015642&sr=8-3" target="_blank">CLICK HERE</a></p>
            </ModalFooter>
      </Modal>
    </React.Fragment>
    );
  }
}



export default NavBar;