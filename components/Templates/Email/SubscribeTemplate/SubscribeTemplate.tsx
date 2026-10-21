import { FC } from 'react';
import { SubscribeTemplateProps } from '../types';

const SubscribeTemplate: FC<Readonly<SubscribeTemplateProps>> = ({ email }) => (
  <div>
    <h1>Nueva suscripción a promociones</h1>
    <p>Email: {email}</p>
    <p>Origen: estelaestudio.com/tree</p>
  </div>
);

export default SubscribeTemplate;
