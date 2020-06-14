import React from 'react';
import { Router } from '@reach/router';

import LandingPage from '../pages/landing';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import SuccessPage from '../pages/success';
import ErrorPage from '../pages/404';

const AppRouter = () => (
  <Router>
    <AboutPage path="/about" />
    <ContactPage path="/contact" />
    <SuccessPage path="/success" />
    <ErrorPage path="/404" default />
    <LandingPage path="/" />
  </Router>
);

export default AppRouter;
