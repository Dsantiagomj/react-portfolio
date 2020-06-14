import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';
import { GoTools } from 'react-icons/go';

const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  min-height: 46rem;
  width: 100vw;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`;

const SectionTitle = styled.h2`
  color: #00343d;
  margin: 0 auto;
  max-width: 30rem;
  padding-top: 5rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  color: #00343d;
  padding: 2rem 0.5rem 0;
  text-align: center;
`;

const CallToAction = styled.span`
  color: #0bd8a2;
  cursor: pointer;
  font-weight: 550;
`;

const ProjectsList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem auto;
  max-width: 70rem;
`;
const Project = styled.div`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;

const ProjectImg = styled.div`
  align-items: center;
  display: flex;
  height: 105px;
  justify-content: center;
  margin-bottom: 2rem;
  width: 240px;
  @media (min-width: 1024px) {
    width: 162px;
  }
`;

const ProjectDescription = styled.ul`
  align-items: center;
  color: #00343d;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 130px;
  justify-content: center;
  list-style: none;
`;

const ProjectLink = styled.p`
  color: ${(props) => (props.disabled ? '#0bd8a2aa' : '#0bd8a2')};
  font-size: 14px;
  font-weight: 550;
  margin-top: 2rem;
  text-align: center;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  }
`;

const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100vw;
`;

const CompaniesList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 50rem;
  padding: 5rem 1rem 15rem;
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
    <>
      <Container>
        <Wrapper>
          <SectionTitle>My Work</SectionTitle>
          <SectionSubtitle>
            Here a few projects i've worked on in the past. Want to see more?
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </SectionSubtitle>
          <ProjectsList>
            <Project>
              <ProjectImg>
                <img
                  alt="Horus Hotel"
                  src="/projects/horushotel.png"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application using Apache Cordova and Laravel.</li>
                <li>
                  Connection to Firebase for push notifications and deployed on
                  Google Cloud.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.horus-sc.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0bd8a2' }}
                >
                  www.horus-sc.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="Shopylive"
                  src="/projects/shopylive.png"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application using React Native and NodeJs.</li>
                <li>Sync with Firebase for OAuth and push notifications.</li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.shopylive.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0bd8a2' }}
                >
                  www.shopylive.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="SimpleLegal"
                  src="/companies/simple-legal.jpg"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Single page application using ReactJS.</li>
                <li>
                  Firebase Kit for Real time database, auth and cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink disabled>
                In development <GoTools />{' '}
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="ElaSustentable"
                  src="/companies/ela-sustentable.png"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Single page application using ReactJS.</li>
                <li>Django & Django rest framework for Rest API.</li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.elasustentable.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0bd8a2' }}
                >
                  www.elasustentable.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="Colorbeats"
                  src="/companies/colorbeats.png"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                E-Commerce webpage using Shopify.
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.colorbeats.co"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0bd8a2' }}
                >
                  www.colorbeats.co
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="Powerpay"
                  src="/companies/powerpay.png"
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Single page application using ReactJS.</li>
                <li>REST API developed using Ruby on Rails.</li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.getpowerpay.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0bd8a2' }}
                >
                  www.getpowerpay.com
                </a>
              </ProjectLink>
            </Project>
          </ProjectsList>
        </Wrapper>
        <Divider />
        <Wrapper>
          <SectionTitle>
            I'm proud to have collaborated with some awesome companies:
          </SectionTitle>
          <CompaniesList>
            <Company>
              <img
                alt="Horus Smart Control"
                src="/companies/horus-sc.svg"
                style={{ margin: 0, height: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Ela Sustentable"
                src="/companies/ela-sustentable.png"
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Simple Legal"
                src="/companies/simple-legal.jpg"
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Colorbeats"
                src="/companies/colorbeats.png"
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Koombea"
                src="/companies/koombea.png"
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
          </CompaniesList>
        </Wrapper>
      </Container>
    </>
  );
};

export default About;
