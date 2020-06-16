import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ImageComponent = styled.img`
  height: ${(props) => props.height};
  margin: 0;
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  padding: 0;
  width: ${(props) => props.width};
`;

const Image = ({
  src,
  alt,
  height,
  width,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
}) => (
  <ImageComponent
    src={src}
    alt={alt}
    height={height}
    width={width}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    minHeight={minHeight}
    minWidth={minWidth}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  height: 'auto',
  maxHeight: 'auto',
  minHeight: 'auto',
  maxWidth: 'auto',
  minWidth: 'auto',
  width: 'auto',
};

export default Image;
