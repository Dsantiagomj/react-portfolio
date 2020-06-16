import React from 'react';
import { Link } from '@reach/router';

import Image from '../../components/image';
import { CenterContentWrapper } from '../../components/container';
import { Title, Typography } from '../../components/typography';
import { DefaultButton } from '../../components/button';

const NotFoundPage = () => (
  <CenterContentWrapper>
    <Image src="/404.png" alt="Error Icon" />
    <Title text="404 NOT FOUND" fontSize="2.25rem" />
    <Typography fontSize="1.5rem" textAlign="center">
      You just hit a route that doesn&apos;t exist... the sadness.
    </Typography>
    <Link to="/" style={{ margin: '0 auto' }}>
      <DefaultButton value="Return home" minWidth="12.25rem" />
    </Link>
  </CenterContentWrapper>
);

export default NotFoundPage;
