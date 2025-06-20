import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '@/i18n.json';
import setLanguage from 'next-translate/setLanguage';

const { locales } = i18nConfig;

const LanguageSwitcher = () => {
  const { lang } = useTranslation();

  const handleLanguageChange = async (lng: string) => {
    if (lng !== lang) {
      await setLanguage(lng);
    }
  };

  return (
    <div className="z-20 flex items-center">
      <button
        type="button"
        className={`text-xl uppercase display-font cursor-pointer ${
          lang === locales[0]
            ? 'text-verde-oscuro-500'
            : 'text-verde-oscuro-300'
        }`}
        onClick={() => handleLanguageChange(locales[0])}
      >
        {locales[0]}
      </button>
      <span className="mx-1 text-verde-oscuro-300">/</span>
      <button
        type="button"
        className={`text-xl uppercase display-font cursor-pointer ${
          lang === locales[1]
            ? 'text-verde-oscuro-500'
            : 'text-verde-oscuro-300'
        }`}
        onClick={() => handleLanguageChange(locales[1])}
      >
        {locales[1]}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
