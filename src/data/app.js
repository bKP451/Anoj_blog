module.exports = {
  title: 'Paul Robert Lloyd',
  shortTitle: 'PRL',
  description: 'The personal website of Paul Robert Lloyd',
  url: process.env.URL || '',
  themeColor: '#f4f4f5',
  themeColorDark: '#26272b',
  accentColor: '#20e',
  backgroundColor: '#fff',
  favicon: '/favicon.svg',
  icon: '/icon.png',
  language: 'en-GB',
  endpoint: {
    auth: 'https://indieauth.com/auth',
    token: 'https://kit.paulrobertlloyd.com/token',
    micropub: 'https://kit.paulrobertlloyd.com/micropub',
    microsub: 'https://aperture.p3k.io/microsub/32',
    webmention: 'https://webmention.io/paulrobertlloyd.com/webmention',
  },
  author: {
    name: 'Paul Robert Lloyd',
    url: 'https://paulrobertlloyd.com',
    email: 'reply@paulrobertlloyd.com',
    avatar: 'https://gravatar.com/avatar/15091a37bacfa4bdd011282627eaca2b?s=512',
  },
  token: {
    mapbox: 'pk.eyJ1IjoicGF1bHJvYmVydGxsb3lkIiwiYSI6Ik54cHBhS0UifQ.bNN4HG8gg9JMj_Dr_hkdLg',
  },
  environment: process.env.NODE_ENV,
};
