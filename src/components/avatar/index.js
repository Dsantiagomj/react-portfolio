import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Avatar = styled.div`
  background-image: url(${(props) => props.defaultImage});
  height: 280px;
  margin: 0 auto;
  margin-top: 2rem;
  transition: background-image 0.2s ease-in-out;
  width: 260px;
  &:hover {
    background-image url(${(props) => props.hoverImage || props.defaultImage});
  }
`;

const AvatarComponent = ({ defaultImage, hoverImage }) => (
  <Avatar defaultImage={defaultImage} hoverImage={hoverImage} />
);

AvatarComponent.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  hoverImage: PropTypes.string,
};

AvatarComponent.defaultProps = {
  hoverImage: '',
};

export default AvatarComponent;
