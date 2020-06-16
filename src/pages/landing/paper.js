import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Title, Typography } from '../../components/typography';

const PaperColumn = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  @media (min-width: 1080px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    flex-direction: row;
  }
`;
const PaperIcon = styled.div`
  color: #0bd8a2;
  font-size: 54px;
  margin-bottom: 1.45rem;
  text-align: center;
`;

const Paper = ({
  icon,
  columnTitle,
  description,
  knowledgeList,
  lastColumn,
}) => (
  <PaperColumn lastColumn={lastColumn}>
    <PaperIcon>{icon}</PaperIcon>
    <Title fontWeight={800}>{columnTitle}</Title>
    <Typography fontSize="0.85rem" textAlign="center">
      {description}
    </Typography>
    <Typography fontSize="0.85rem" textAlign="center" color="#0bd8a2">
      Languages & tools I&apos;ve learned and used:
    </Typography>
    <Typography fontSize="0.85rem" textAlign="center">
      {knowledgeList}
    </Typography>
  </PaperColumn>
);

Paper.propTypes = {
  icon: PropTypes.node.isRequired,
  columnTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  knowledgeList: PropTypes.string.isRequired,
  lastColumn: PropTypes.bool.isRequired,
};

export default Paper;
