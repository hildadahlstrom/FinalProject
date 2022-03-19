/**
 * Navigation component contains the NavBar and Links to all pages within the project
 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='sm'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/my-recipes'>
          <Nav.Link>Favorites</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
          <Nav.Link>Find a Recipe</Nav.Link>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
