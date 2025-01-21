export type FormContactProps = {
  service: string;
  title: string;
  image: string;
  content: string;
};

export interface FormElements extends HTMLFormElement {
  clientName: HTMLInputElement;
  organization: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}
