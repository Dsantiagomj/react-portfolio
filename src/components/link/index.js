import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const LinkComponent = styled.a`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: #0bd8a2;
  margin: 0 auto;
  text-decoration: none;
`;

const Link = ({ children, href, disabled }) => (
  <LinkComponent
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    disabled={disabled}
  >
    {children}
  </LinkComponent>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  disabled: false,
};

export default Link;
