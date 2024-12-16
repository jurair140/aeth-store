import React from 'react'
import SearchBar from './SearchBar'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-secondary">
        <Container>
            <div>
            <Navbar.Brand href="/">
            <i className="fa-solid fa-truck-fast fa-xl" bounce style={{color: "#031f4f",}} />
            {' '}
            STORE
          </Navbar.Brand>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
