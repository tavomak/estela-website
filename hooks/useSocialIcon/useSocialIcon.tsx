import { JSX } from 'react';
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const useSocialIcon = () => {
  const getSocialMediaIconByName = (networkName: string) => {
    const iconMap: Record<string, JSX.Element> = {
      youtube: <FaYoutube />,
      spotify: <FaSpotify />,
      instagram: <FaInstagram />,
      tiktok: <FaTiktok />,
    };
    return iconMap[networkName.toLowerCase() as keyof typeof iconMap] || <FaSpotify />;
  };
  return [getSocialMediaIconByName];
};

export default useSocialIcon;
