import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ContentWrapperComponent = styled.div`
  animation: fadeInAnimation ease 0.75s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CenterContentWrapperComponent = styled(ContentWrapperComponent)`
  animation: fadeInAnimation ease 1s;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContentWrapper = ({ children }) => (
  <ContentWrapperComponent>{children}</ContentWrapperComponent>
);
ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const CenterContentWrapper = ({ children }) => (
  <CenterContentWrapperComponent>{children}</CenterContentWrapperComponent>
);
CenterContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
