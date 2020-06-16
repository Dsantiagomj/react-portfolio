import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { GoTools } from 'react-icons/go';

import Image from '../../components/image';
import Link from '../../components/link';
import { Typography } from '../../components/typography';

const CardWrapper = styled.div`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 25.5rem;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;
const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 6rem;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
`;

const Card = ({ image, descriptions, link, id }) => (
  <CardWrapper key={id}>
    <ImageWrapper>
      <Image
        alt={image.alt}
        src={image.src}
        maxHeight="6rem"
        maxWidth="10rem"
      />
    </ImageWrapper>
    <CardContent>
      {descriptions.map((description) => (
        <Typography textAlign="center" fontSize="0.85rem" key={description}>
          {description}
        </Typography>
      ))}
    </CardContent>
    <Link
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
      disabled={link.isDisabled}
    >
      {link.isDisabled ? (
        <Typography fontSize="0.8rem" color="#0bd8a2">
          In development <GoTools />
        </Typography>
      ) : (
        <Typography fontSize="0.8rem" fontWeight={600} color="#0bd8a2">
          {link.textLink}
        </Typography>
      )}
    </Link>
  </CardWrapper>
);

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    textLink: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
