import { FC } from 'react';
import { EmailTemplateProps } from './types';
import ContactTemplate from './ContactTemplate';
import TalkUsTemplate from './TalkUsTemplate';

const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ ...props }) => {
  switch (props.templateType) {
    case 'contact':
      return <ContactTemplate {...props} />;
    case 'talkUs':
      return <TalkUsTemplate {...props} />;
    default:
      console.error('Tipo de plantilla no soportado');
      return null;
  }
};

export default EmailTemplate;
