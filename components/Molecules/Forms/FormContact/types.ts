export type FormContactProps = {
  service: string;
  title: string;
  image: string;
  content: string;
};

export interface FormElements extends HTMLFormElement {
  email: HTMLInputElement;
  clientName: HTMLInputElement;
  clientLastName: HTMLInputElement;
  clientPhone: HTMLInputElement;
  message: HTMLTextAreaElement;
}
