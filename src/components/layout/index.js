import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Header from '../header';
import Footer from '../footer';
import { ContentWrapper } from '../container';

const Main = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children, location }) => {
  return (
    <ContentWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer location={location} />
    </ContentWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
