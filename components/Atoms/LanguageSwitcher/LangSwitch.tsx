import { useRouter } from 'next/router';
import { useLocale } from 'next-intl';
import { languages } from '@/utils';

const locales = [languages.es, languages.en];

const LanguageSwitcher = () => {
  const router = useRouter();
  const activeLocale = useLocale();

  const handleLanguageChange = () => {
    const next = activeLocale === languages.es ? languages.en : languages.es;
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: next });
  };

  return (
    <button type='button' className='flex z-20 items-center' onClick={handleLanguageChange}>
      <span
        className={`text-xl uppercase display-font cursor-pointer ${
          activeLocale === locales[0] ? 'text-ea-verde-oscuro-500' : 'text-ea-verde-oscuro-300'
        }`}
      >
        {languages.es}
      </span>
      <span className='mx-1 text-ea-verde-oscuro-300'>/</span>
      <span
        className={`text-xl uppercase display-font cursor-pointer ${
          activeLocale === locales[1] ? 'text-ea-verde-oscuro-500' : 'text-ea-verde-oscuro-300'
        }`}
      >
        {languages.en}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
