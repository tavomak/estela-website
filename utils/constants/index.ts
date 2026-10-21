export const siteName = 'Estela Estudio Digital';

export const siteUrl = 'https://estelaestudio.com';

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

// Translatable copy lives in locales under `homepage_cases.<id>`
// `images` order must match `homepage_cases.<id>.images_alt`
export const caseStudies = [
  {
    id: 'cfc',
    name: 'CFC Capital',
    url: 'https://cfccapital.cl/',
    author: 'Ema Jara',
    theme: 'mint',
    images: [
      '/cases/cfc-home.webp',
      '/cases/cfc-minefact-web.webp',
      '/cases/post-proyecto.webp',
      '/cases/cfc-newsletter.webp',
    ],
  },
  {
    id: 'fayj',
    name: 'Fundación Amparo y Justicia',
    url: 'https://amparoyjusticia.cl/',
    author: 'Paola Carmona Zubillaga',
    theme: 'dark',
    images: ['/cases/fayj-home.webp', '/cases/fayj-campana.webp', '/cases/fayj-nna.webp'],
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];

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
  autoplay: true,
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
