export interface TalkUsTemplateProps {
  clientName: string;
  email: string;
  message: string;
}

export interface ContactTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  tag: string;
}

export interface SubscribeTemplateProps {
  email: string;
}

export type EmailTemplateProps =
  | ({ templateType: 'contact' } & ContactTemplateProps)
  | ({ templateType: 'talkUs' } & TalkUsTemplateProps)
  | ({ templateType: 'subscribe' } & SubscribeTemplateProps);
