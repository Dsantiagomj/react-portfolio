const projects = [
  {
    id: 1,
    image: {
      src: '/projects/horushotel.png',
      alt: 'Horus Hotel',
    },
    description: [
      'Mobile application using Apache Cordova and Laravel.',
      'Connection to Firebase for push notifications and deployed on Google Cloud.',
    ],
    link: {
      href: 'https://www.horus-sc.com',
      isDisabled: false,
      textLink: 'www.horus-sc.com',
    },
  },
  {
    id: 2,
    image: {
      src: '/projects/shopylive.png',
      alt: 'Shopylive',
    },
    description: [
      'Mobile application using React Native and NodeJs.',
      'Sync with Firebase for OAuth and push notifications.',
    ],
    link: {
      href: 'https://www.shopylive.com',
      isDisabled: false,
      textLink: 'www.shopylive.com',
    },
  },
  {
    id: 3,
    image: {
      src: '/companies/simple-legal.jpg',
      alt: 'SimpleLegal',
    },
    description: [
      'Single page application using ReactJS.',
      'Firebase Kit for Real time database, auth and cloud functions.',
    ],
    link: {
      href: '',
      isDisabled: true,
      textLink: '',
    },
  },
  {
    id: 4,
    image: {
      src: '/companies/ela-sustentable.png',
      alt: 'Ela Sustentable',
    },
    description: [
      'Single page application using ReactJS.',
      'Django & Django rest framework for Rest API.',
    ],
    link: {
      href: 'https://www.elasustentable.com',
      isDisabled: false,
      textLink: 'www.elsasustentable.com',
    },
  },
  {
    id: 5,
    image: {
      src: '/companies/colorbeats.png',
      alt: 'Colorbeats',
    },
    description: ['E-Commerce webpage using Shopify.'],
    link: {
      href: 'https://www.colorbeats.co',
      isDisabled: false,
      textLink: 'www.colorbeats.co',
    },
  },
  {
    id: 6,
    image: {
      src: '/companies/powerpay.png',
      alt: 'Powerpay',
    },
    description: [
      'Single page application using ReactJS.',
      'REST API developed using Ruby on Rails.',
    ],
    link: {
      href: 'https://www.getpowerpay.com',
      isDisabled: false,
      textLink: 'www.getpowerpay.com',
    },
  },
];

export default projects;
