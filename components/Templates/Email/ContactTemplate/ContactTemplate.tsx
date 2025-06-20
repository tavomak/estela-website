import { FC } from 'react';
import { ContactTemplateProps } from '../types';

const ContactTemplate: FC<Readonly<ContactTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
  tag,
}) => (
  <div>
    <h1>Nuevo mensaje de contacto</h1>
    <p>
      Nombre: {firstName} {lastName}
    </p>
    <p>Email: {email}</p>
    <p>Teléfono: {phone}</p>
    <p>Mensaje: {message}</p>
    <p>Tag: {tag}</p>
  </div>
);

export default ContactTemplate;
