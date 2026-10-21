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

export type TreeLink = {
  network: string;
  name: string;
  handle: string;
  url: string;
};

export const treeLinks: Record<'estela' | 'lari', TreeLink[]> = {
  estela: [
    {
      network: 'instagram',
      name: 'Instagram',
      handle: '@estela_estudio_',
      url: 'https://www.instagram.com/estela_estudio_/',
    },
    { network: 'web', name: 'tree_website', handle: 'estelaestudio.com', url: '/' },
  ],
  lari: [
    {
      network: 'instagram',
      name: 'Instagram',
      handle: '@lari_dada',
      url: 'https://www.instagram.com/lari_dada/',
    },
    {
      network: 'tiktok',
      name: 'TikTok',
      handle: '@lari_dada',
      url: 'https://www.tiktok.com/@lari_dada',
    },
  ],
};

// ponytail: QR in public/qr-whatsapp-tree.svg is static — regenerate if number/message changes (see .agents/specs/tree-landing.md)
export const treeContact = {
  whatsapp: '56931024175',
  phoneLabel: '+56 9 3102 4175',
  email: 'lorena@estelaestudio.com',
  linkedin: 'https://www.linkedin.com/in/lorena-m%C3%A1rquez-14b132151/',
  linkedinName: 'Lorena Márquez',
};

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
