import React from 'react';
import { Link } from '@reach/router';

import Image from '../../components/image';
import { CenterContentWrapper } from '../../components/container';
import { DefaultButton } from '../../components/button';
import { Title, Typography } from '../../components/typography';

const Success = () => (
  <CenterContentWrapper>
    <Image src="/success.svg" alt="Success Icon" />
    <Title fontSize="2.25rem">Message received. Thanks!</Title>
    <Typography fontSize="1.5rem" textAlign="center">
      I&apos;ll be in touch with you shortly.
    </Typography>
    <Link to="/" style={{ margin: '0 auto' }}>
      <DefaultButton value="Back to home" minWidth="12.25rem" />
    </Link>
  </CenterContentWrapper>
);

export default Success;
