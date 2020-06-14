import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';

const Container = styled.div`
  background-color: ${(props) =>
    props.variantBackground ? '#20C98B' : 'white'};
  margin: 0 auto;
  min-height: ${(props) => (props.variantBackground ? '34rem' : '46rem')};
  padding: 2rem;
  padding-bottom: 0;
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
`;

const Title = styled.h2`
  color: #00343d;
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
const Subtitle = styled.p`
  color: #00343d;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 100%;
`;
const Button = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: #0bd8a2;
  margin: 0 auto;
  padding: 0.5rem;
  transition: padding 0.3s ease-in-out;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => (props.colored ? 'white' : '#00343d')};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
    font-weight: 800;
  }
`;
const SectionText = styled.p`
  color: ${(props) => (props.colored ? 'white' : '#00343d')};
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 40rem;
  padding-bottom: 4rem;
`;

const Card = styled.div`
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
const CardColumn = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  margin: 0 auto;
  padding-top: 2rem;
  width: 100%;
  @media (min-width: 1080px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    flex-direction: row;
  }
`;
const CardTitle = styled.h3`
  color: #00343d;
  font-size: 18px;
  text-align: center;
`;
const CardIcon = styled.div`
  color: #0bd8a2;
  font-size: 54px;
  margin-bottom: 1.45rem;
  text-align: center;
`;
const CardText = styled.p`
  color: ${(props) => (props.colored ? '#0bd8a2' : '#00343d')};
  font-size: 14px;
  font-weight: ${(props) => (props.colored ? '550' : '500')};
  padding: 0 1rem;
  text-align: center;
  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const SubsectionTitle = styled.h3`
  color: #00343d;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const SubsectionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;
const SubsectionItem = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  padding-bottom: 2rem;
  padding-top: 1rem;
  @media (min-width: 768px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    flex-direction: row;
    width: 30rem;
  }
`;
const SubsectionText = styled.p`
  color: #00343d;
  text-align: center;
  @media (min-width: 768px) {
    height: 4.5rem;
    padding: 0 3.5rem;
  }
`;

const Avatar = styled.div`
  background-image: url(${(props) => props.defaultImage});
  height: 280px;
  margin: 0 auto;
  margin-top: 2rem;
  transition: background-image 0.2s ease-in-out;
  width: 260px;
  &:hover {
    background-image url(${(props) => props.onHoverImage});
  }
`;

const titleText = '< Hello World />';

const LandingPage = () => (
  <>
    <Container>
      <Wrapper>
        <Title> {titleText} </Title>
        <Subtitle>
          I'm a Web Developer, passionate about what I do, and always learning
          something new.
        </Subtitle>
        <Avatar defaultImage="/avatar.svg" onHoverImage="/hover_avatar.svg" />
        <ImgWrapper>
          <img src="/hero.svg" style={{ padding: 0, margin: 0 }} alt="" />
        </ImgWrapper>
      </Wrapper>
    </Container>
    <CenteredContainer variantBackground>
      <CenteredWrapper>
        <SectionTitle colored>
          Hi, I'm Santiago. Pleasure to meet you.
        </SectionTitle>
        <SectionText colored>
          Coming from Barranquilla, Colombia, I started my journey as a
          developer in 2018. I have special interest in front-end and mobile
          development, where I have worked most of my projects and potentialized
          my skills. A fan of learning and interacting with new technologies,
          these are the skills I have learned and improved during my journey.
        </SectionText>
      </CenteredWrapper>
    </CenteredContainer>
    <Container>
      <Wrapper>
        <Card>
          <CardColumn>
            <CardIcon>
              <AiOutlineMobile />
            </CardIcon>
            <CardTitle>Mobile Development</CardTitle>
            <CardText>
              I have crossed ways with this path a couple of times. I'm very
              curious about this path and looking forward to digging into it.
            </CardText>
            <CardText colored>
              Languages & tools I've learned and used:
            </CardText>
            <CardText>JavaScript, React Native, Expo, Cordova</CardText>
          </CardColumn>
          <CardColumn>
            <CardIcon>
              <GoBrowser />
            </CardIcon>
            <CardTitle>Frontend Development</CardTitle>
            <CardText>
              My main path, I've worked mostly as a frontend developer and I'm
              loving it. I like to bring ideas to life in the browser.
            </CardText>
            <CardText colored>
              Languages & tools I've learned and used:
            </CardText>
            <CardText>
              HTML5, CSS3, Sass, BEM, JavaScript, JQuery, ReactJs, Redux,
              GatsbyJs, Shopify
            </CardText>
          </CardColumn>
          <CardColumn lastColumn>
            <CardIcon>
              <BsTerminal />
            </CardIcon>
            <CardTitle>Backend Development & Others</CardTitle>
            <CardText>
              Technologies that I've learned on my journey. Some of them crucial
              on my day by day, others looking forward to using again.
            </CardText>
            <CardText colored>
              Languages & tools I've learned and used:
            </CardText>
            <CardText>
              Terminal, Git, Github, Ruby, Ruby on Rails, JavaScript, NodeJs,
              ExpressJs, Python, Django, MongoDB, PostgreSQL.
            </CardText>
          </CardColumn>
        </Card>
        <SubsectionTitle>Learn more about me</SubsectionTitle>
        <SubsectionContent>
          <SubsectionItem>
            <SubsectionText>
              Check some of the projects and companies i've been involved with.
            </SubsectionText>
            <ButtonWrapper>
              <Link to="/about" style={{ margin: '0 auto' }}>
                <Button>Check More</Button>
              </Link>
            </ButtonWrapper>
          </SubsectionItem>
          <SubsectionItem lastColumn>
            <SubsectionText>Or download a summary of my work</SubsectionText>
            <ButtonWrapper>
              <a
                href="https://docs.google.com/document/d/1dgpgIH_hytsIra1GGB4X9Cw_-wPsM9Yzo8KACVqskEU/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: '0 auto' }}
              >
                <Button>Get my Resume</Button>
              </a>
            </ButtonWrapper>
          </SubsectionItem>
        </SubsectionContent>
      </Wrapper>
    </Container>
  </>
);

export default LandingPage;
