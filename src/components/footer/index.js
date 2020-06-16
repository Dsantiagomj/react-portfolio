import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';

import Image from '../image';
import { DefaultButton } from '../button';
import { Typography } from '../typography';

const Container = styled.div`
  background-color: #00343d;
  margin-top: 5rem;
  padding: 4rem 0;
`;
const Paper = styled.div`
  align-items: center;
  background: #141c3a;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: -9rem;
  padding: 3.5rem 1.25rem;
  max-width: 60rem;
  width: 90%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
  width: 100vw;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  max-width: 25rem;
`;
const ListItem = styled.li`
  border: solid 2px rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  color: white;
  height: 48px;
  position: relative;
  transition: background-color 0.1s ease-in-out;
  width: 48px;
  &:hover {
    background-color: white;
    color: #0bd8a2;
  }
`;
const Icon = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 1.25rem;
  justify-content: center;
  position: absolute;
  top: 12px;
  left: 12px;
  @media (min-width: 768px) {
    top: 10px;
    left: 10px;
  }
`;
const Copyright = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  justify-content: center;
`;

const Footer = ({ location }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Container>
      {location !== '/contact' && (
        <Paper>
          <Typography
            color="#FFFFFF"
            fontSize="1.25rem"
            fontWeight={800}
            margin="0"
          >
            Start a project
          </Typography>
          <Typography
            color="#FFFFFF"
            fontSize="1rem"
            textAlign="center"
            margin="0"
          >
            Interested in working together? Let&apos;s schedule a call.
          </Typography>
          <Link to="/contact">
            <DefaultButton value="Let's talk" minWidth="12.25rem" />
          </Link>
        </Paper>
      )}
      <ImageWrapper>
        <Image
          src="/white_logo.png"
          alt="DS Software Developer logo"
          height="5.5rem"
          width="13rem"
        />
      </ImageWrapper>
      <Typography textAlign="center" color="#FFFFFFB3" fontSize="1.25rem">
        Living, learning & leveling up one day at a time.
      </Typography>
      <List>
        <a
          href="https://www.github.com/dsantiagomj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem>
            <Icon>
              <AiFillGithub />
            </Icon>
          </ListItem>
        </a>

        <a
          href="https://www.linkedin.com/in/dsantiagomj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem>
            <Icon>
              <AiOutlineLinkedin />
            </Icon>
          </ListItem>
        </a>
        <a href="mailto:dsantiagomj@icloud.com" rel="noopener noreferrer">
          <ListItem>
            <Icon>
              <AiOutlineMail />
            </Icon>
          </ListItem>
        </a>
      </List>
      <Typography textAlign="center" color="#ffffff">
        Handcrafted by @dsantiagomj - © {currentYear}
      </Typography>

      <Copyright>
        <Typography textAlign="center" color="#ffffff" margin="0">
          Made with{' '}
        </Typography>
        <GrReactjs
          style={{
            fontSize: '1rem',
            marginLeft: '0.25rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        />
      </Copyright>
    </Container>
  );
};

export default Footer;
