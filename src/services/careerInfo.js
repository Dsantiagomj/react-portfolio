import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';

const careerInfo = [
  {
    id: 1,
    icon: <AiOutlineMobile />,
    title: 'Mobile Development',
    description:
      'I have crossed ways with this path a couple of times. I&apos;m very curious about this and i&apos;m looking forward to digging into it.',
    knowledgeList: 'JavaScript, React Native, Expo, Cordova',
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: 'Frontend Development',
    description:
      'My main path, I&apos;ve worked mostly as a frontend developer and I&apos;m loving it. I like to bring ideas to life in the browser.',
    knowledgeList:
      'HTML5, CSS3, Sass, BEM, JavaScript, JQuery, ReactJs, Redux, GatsbyJs, Shopify',
  },
  {
    id: 3,
    icon: <BsTerminal />,
    title: 'Backend Develoment & Others',
    description:
      'Technologies that I&apos;ve learned on my journey. Some of them crucial on my day by day, others looking forward to using again.',
    knowledgeList:
      'Terminal, Git, Github, Ruby, Ruby on Rails, JavaScript, NodeJs, ExpressJs, Python, Django, MongoDB, PostgreSQL.',
  },
];

export default careerInfo;
