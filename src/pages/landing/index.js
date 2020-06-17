import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

import careerInfo from '../../services/careerInfo';

import Paper from './paper';

import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Avatar from '../../components/avatar';
import Image from '../../components/image';
import { TransitionButton } from '../../components/button';
import { Title, Typography } from '../../components/typography';

const Container = styled.div`
  background-color: ${(props) =>
    props.variantBackground ? '#20C98B' : 'white'};
  margin: 0 auto;
  min-height: ${(props) => (props.variantBackground ? '34rem' : '46rem')};
  padding: 2rem;
  padding-bottom: ${(props) => (props.variantBackground ? '6rem' : '0')};
  width: 100vw;
`;
const CenteredContainer = styled(Container)`
  display: flex;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`;
const CenteredWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 42rem;
`;
const TitleWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;
const TextWrapper = styled.div`
  margin-top: 1rem;
  height: 8rem;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;
const PaperComponent = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: -9rem;
  width: 100%;
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 3rem 1rem 1.5rem;
  }
`;
const Column = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  display: flex;
  flex-direction: column;
  height: 12rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  @media (min-width: 768px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    width: 30rem;
  }
`;

const titleText = '< Hello World />';

const LandingPage = ({ location: { pathname } }) => (
  <Layout location={pathname}>
    <SEO
      title="Santiago M | Software Developer"
      description="Personal Web Developer Portfolio. I'm a Fullstack developer with emphasis on Front-End and JavaScript specialist"
    />
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title fontSize="2.2rem" fontWeight={800}>
            {titleText}
          </Title>
        </TitleWrapper>
        <Typography textAlign="center">
          I&apos;m a Web Developer, passionate about what I do, and always
          learning something new.
        </Typography>
        <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
        <ImgWrapper>
          <Image src="/hero.svg" alt="" />
        </ImgWrapper>
      </Wrapper>
    </Container>

    <CenteredContainer variantBackground>
      <CenteredWrapper>
        <Title color="white" fontSize="2rem" fontWeight={700}>
          Hi, I&apos;m Santiago. Pleasure to meet you.
        </Title>
        <Typography color="white" textAlign="center">
          Coming from Barranquilla, Colombia, I started my journey as a
          developer in 2018. I have special interest in front-end and mobile
          development, where I have worked most of my projects and potentialized
          my skills. A fan of learning and interacting with new technologies,
          these are the skills I have learned and improved during my journey.
        </Typography>
      </CenteredWrapper>
    </CenteredContainer>

    <Container>
      <Wrapper>
        <PaperComponent>
          {careerInfo.map((data, index) => (
            <Paper
              key={data.id}
              icon={data.icon}
              columnTitle={data.title}
              description={data.description}
              knowledgeList={data.knowledgeList}
              lastColumn={careerInfo.length === index + 1}
            />
          ))}
        </PaperComponent>
        <TitleWrapper>
          <Title fontSize="1.5rem" fontWeight={800}>
            Learn more about me
          </Title>
        </TitleWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <Typography textAlign="center">
                Check some of the projects and companies i&apos;ve been involved
                with.
              </Typography>
            </TextWrapper>
            <ButtonWrapper>
              <Link to="/about" style={{ margin: '0 auto' }}>
                <TransitionButton value="Check More" />
              </Link>
            </ButtonWrapper>
          </Column>
          <Column lastColumn>
            <TextWrapper>
              <Typography textAlign="center">
                Or download a summary of my work.
              </Typography>
            </TextWrapper>
            <ButtonWrapper>
              <a
                href={`${process.env.REACT_APP_RESUME_URL}/export?format=pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: ' 0 auto' }}
              >
                <TransitionButton value="Get my resume" />
              </a>
            </ButtonWrapper>
          </Column>
        </ColumnWrapper>
      </Wrapper>
    </Container>
  </Layout>
);

export default LandingPage;
