import { FC } from 'react';
import { TalkUsTemplateProps } from '../types';

const TalkUsTemplate: FC<Readonly<TalkUsTemplateProps>> = ({
  clientName,
  organization,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Nuevo mensaje de formulario hablemos</h1>
    <p>Nombre: {clientName}</p>
    <p>Organización: {organization}</p>
    <p>Email: {email}</p>
    <p>Asunto: {subject}</p>
    <p>Mensaje: {message}</p>
  </div>
);

export default TalkUsTemplate;
