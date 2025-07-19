import { FC } from 'react';
import { TalkUsTemplateProps } from '../types';

const TalkUsTemplate: FC<Readonly<TalkUsTemplateProps>> = ({ clientName, email, message }) => (
  <div>
    <h1>Nuevo mensaje de formulario hablemos</h1>
    <p>Nombre: {clientName}</p>
    <p>Email: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);

export default TalkUsTemplate;
