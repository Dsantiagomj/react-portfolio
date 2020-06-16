import React, { useState } from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Drawer from './drawer';
import { DefaultButton } from '../button';

const Container = styled.div`
  align-items: center;
  background: white;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  max-width: 80rem;
  padding: 0 0.5rem;
  padding-top: 3rem;
  width: 100%;
  zindex: 3;
  @media (min-width: 1024px) {
    padding-top: 2.5rem;
  }
`;

const Menu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  width: 16rem;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`;

const MenuItem = styled.li`
  color: #00343d;
  font-size: 0.875rem;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #0bd8a2;
    cursor: pointer;
  }
`;

const ResponsiveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  // responsive navbar status
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <Container>
      <Link
        to="/"
        style={{
          color: `#141c3a`,
          textDecoration: `none`,
          zIndex: 3,
        }}
      >
        <img
          style={{ margin: 0 }}
          src="/black_logo.png"
          alt="DS Logo"
          width="150px"
        />
      </Link>
      <Menu>
        <Link
          to="/about"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>About me</MenuItem>
        </Link>
        <Link
          to="/contact"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>
            <DefaultButton value="Get in touch" />
          </MenuItem>
        </Link>
      </Menu>

      <ResponsiveButton onClick={() => setNavbarStatus(!navbarStatus)}>
        {navbarStatus ? <AiOutlineClose /> : <AiOutlineMenu />}
      </ResponsiveButton>

      <Drawer isOpen={navbarStatus} />
    </Container>
  );
};

export default Header;
