import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

import projects from '../../services/projects';
import companies from '../../services/companies';

import SEO from '../../components/seo';
import Card from './card';
import Layout from '../../components/layout';
import Image from '../../components/image';
import ListWrapper from '../../components/list';
import { Title, Typography } from '../../components/typography';

const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  min-height: 46rem;
  width: 100vw;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 80rem;
`;

const TextWrapper = styled.h2`
  margin: 0 auto;
  max-width: 36rem;
`;

const CallToAction = styled.span`
  color: #0bd8a2;
  cursor: pointer;
  font-weight: 550;
`;

const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100vw;
`;

const Company = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  width: 200px;
  @media (min-width: 968px) {
    margin: 1rem;
  }
`;

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO
        title="About | Software Developer"
        description="Personal Web Developer Portfolio. I'm a Fullstack developer with emphasis on Front-End and JavaScript specialist"
      />
      <Container>
        <Wrapper>
          <Title text="My Work" fontSize="1.75rem" fontWeight={700} />
          <Typography textAlign="center">
            Here a few projects i&apos;ve worked on in the past. Want to see
            more?
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </Typography>
          <ListWrapper maxWidth="70rem">
            {projects.map((project) => (
              <Card
                id={project.id}
                key={project.id}
                image={project.image}
                descriptions={project.description}
                link={project.link}
              />
            ))}
          </ListWrapper>
        </Wrapper>
        <Divider />
        <Wrapper>
          <TextWrapper>
            <Typography fontSize="1.75rem" fontWeight={700} textAlign="center">
              I&apos;m proud to have collaborated with some awesome companies:
            </Typography>
          </TextWrapper>
          <ListWrapper maxWidth="50rem" justifyContent="space-evenly">
            {companies.map((company) => (
              <Company key={company.id}>
                <Image alt={company.name} src={company.logo} maxHeight="7rem" />
              </Company>
            ))}
          </ListWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default About;
