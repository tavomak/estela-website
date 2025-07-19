export const siteName = 'Estela Estudio Digital';

export const environments = {
  production: 'production',
  development: 'development',
};

export const contactCountries = ['cl', 'us', 'es'];

export const contactMasks = {
  cl: '(.) .... ....',
  us: '(...) ... ....',
  es: '(...) ... ...',
};

export const navItems = [
  {
    label: 'nav_homepage_title',
    path: '/',
  },
  // {
  //   label: 'nav_about_title',
  //   path: '/about',
  // },
  {
    label: 'nav_services_title',
    path: '/services',
  },
  // {
  //   label: 'nav_cases_title',
  //   path: '/portfolio',
  // },
  // {
  //   label: 'nav_contact_title',
  //   path: '/contact',
  // },
];

export const flagIconsMapping: { [key: string]: string } = {
  en: 'us',
  es: 'spa',
};

export const languages = {
  en: 'en',
  es: 'es',
};

export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
