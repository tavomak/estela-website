export type FormContactProps = {
  service: string;
  title: string;
  image: string;
  content: string;
};

export interface FormElements extends HTMLFormElement {
  clientName: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
