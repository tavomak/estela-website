import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '@/i18n.json';
import setLanguage from 'next-translate/setLanguage';
import { languages } from '@/utils';

const { locales } = i18nConfig;

const LanguageSwitcher = () => {
  const { lang } = useTranslation();

  const handleLanguageChange = async (lng: string) => {
    await setLanguage(lng === languages.es ? languages.en : languages.es);
  };

  return (
    <button
      type='button'
      className='flex z-20 items-center'
      onClick={() => handleLanguageChange(lang)}
    >
      <span
        className={`text-xl uppercase display-font cursor-pointer ${
          lang === locales[0] ? 'text-verde-oscuro-500' : 'text-verde-oscuro-300'
        }`}
      >
        {languages.es}
      </span>
      <span className='mx-1 text-verde-oscuro-300'>/</span>
      <span
        className={`text-xl uppercase display-font cursor-pointer ${
          lang === locales[1] ? 'text-verde-oscuro-500' : 'text-verde-oscuro-300'
        }`}
      >
        {languages.en}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
