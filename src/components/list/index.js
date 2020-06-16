import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ListWrapperComponent = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
  margin: 5rem auto;
  max-width: ${(props) => props.maxWidth};
`;

const ListWrapper = ({ children, justifyContent, maxWidth }) => (
  <ListWrapperComponent justifyContent={justifyContent} maxWidth={maxWidth}>
    {children}
  </ListWrapperComponent>
);

ListWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  maxWidth: PropTypes.string,
};

ListWrapper.defaultProps = {
  justifyContent: 'center',
  maxWidth: 'auto',
};

export default ListWrapper;
