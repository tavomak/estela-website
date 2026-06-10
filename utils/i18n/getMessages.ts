export const loadMessages = async (locale: string | undefined) => {
  const resolved = locale ?? 'es';
  const common = (await import(`@/locales/${resolved}/common.json`)).default;
  return { common };
};
