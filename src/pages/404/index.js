import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

const Wrapper = styled.div`
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
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

const Img = styled.div`
  max-width: 400px;
`;
const Title = styled.h2`
  font-size: 36px;
  margin: 1rem 0;
  max-width: 500px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
const Text = styled.p`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
const Button = styled.input`
  background: transparent;
  background-clip: padding-box;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: #0bd8a2;
  margin: 0 auto;
  padding: ${(props) => (props.returnHome ? '0.5rem' : '0.5rem 3rem')};
  text-align: center;
  transition: padding 0.3s ease-in-out;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
    padding: ${(props) => (props.returnHome ? '0.5rem 1rem' : '0.5rem 3.5rem')};
  }
`;

const NotFoundPage = () => (
  <Wrapper>
    <Img>
      <img src="/404.png" alt="Error Icon" style={{ margin: 0 }} />
    </Img>
    <Title>404 NOT FOUND</Title>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    <Link to="/" style={{ margin: '0 auto' }}>
      <Button value="Return home" returnHome readOnly />
    </Link>
  </Wrapper>
);

export default NotFoundPage;
