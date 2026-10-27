import type { GetStaticPropsContext } from 'next';
import Layout from '@/components/Templates/Layout';
import { loadMessages } from '@/utils/i18n/getMessages';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const contactEmail = 'gustavo.rivero@estelaestudio.com';

const h2 = 'mt-8 mb-2 text-xl font-semibold';
const link = 'underline text-ea-verde-oscuro-500';

// ponytail: legal text is Spanish-only, so it lives inline instead of in locales/
const Privacidad = () => (
  <Layout
    title='Política de privacidad'
    description='Cómo Estela Estudio Digital trata los datos de su herramienta interna de gestión de redes sociales.'
  >
    <article className='px-4 py-12 mx-auto max-w-3xl leading-relaxed [&_li]:mb-1 [&_ol]:pl-6 [&_ol]:list-decimal [&_ul]:pl-6 [&_ul]:list-disc'>
      <h1 className='mb-1 text-4xl display-font text-ea-verde-oscuro-500'>
        Política de privacidad
      </h1>
      <p className='mb-6 text-sm text-gray-600'>
        Estela Estudio Digital · Última actualización: 28 de octubre de 2026
      </p>

      <p>
        Esta política describe cómo Estela Estudio Digital (&quot;nosotros&quot;) trata los datos
        obtenidos a través de nuestra herramienta interna de gestión de redes sociales (una
        instancia propia de Postiz), incluida la app &quot;Postiz&quot; registrada en Meta for
        Developers y en LinkedIn Developers.
      </p>

      <h2 className={h2}>1. Alcance</h2>
      <p>
        La herramienta es de <strong>uso exclusivamente interno</strong>. Solo la usa nuestro equipo
        para planificar, programar y publicar contenido en las páginas de Facebook, cuentas de
        Instagram y perfiles o páginas de LinkedIn que pertenecen a Estela Estudio Digital o que
        administramos directamente. No se ofrece a terceros ni al público.
      </p>

      <h2 className={h2}>2. Datos que tratamos</h2>
      <p>
        Cuando un miembro de nuestro equipo conecta una cuenta mediante el inicio de sesión de
        Facebook o LinkedIn, la herramienta recibe y guarda solo lo necesario para funcionar:
      </p>
      <ul>
        <li>Identificador, nombre e imagen de perfil de la cuenta, página o perfil conectado.</li>
        <li>
          Tokens de acceso emitidos por Meta o LinkedIn para publicar en nombre de esas cuentas.
        </li>
        <li>El contenido que nosotros creamos y programamos (textos, imágenes y videos).</li>
        <li>
          Métricas de interacción de nuestras propias publicaciones (por ejemplo, alcance,
          reacciones y comentarios).
        </li>
      </ul>
      <p>
        No recopilamos datos de seguidores ni de otros usuarios más allá de lo que las plataformas
        muestran en las métricas y comentarios de nuestras propias publicaciones.
      </p>

      <h2 className={h2}>3. Finalidad</h2>
      <p>
        Usamos estos datos únicamente para publicar y programar nuestro propio contenido, moderar
        comentarios en nuestras publicaciones y revisar su rendimiento. No usamos los datos para
        publicidad dirigida, elaboración de perfiles ni ningún otro fin.
      </p>

      <h2 className={h2}>4. Almacenamiento y seguridad</h2>
      <p>
        Los datos se almacenan en un servidor propio administrado por Estela Estudio Digital. El
        acceso a la herramienta está restringido a miembros autorizados del equipo mediante
        autenticación y conexión cifrada (HTTPS).
      </p>

      <h2 className={h2}>5. Compartición de datos</h2>
      <p>
        <strong>No vendemos, alquilamos ni compartimos</strong> los datos obtenidos de Meta o
        LinkedIn con terceros. Los datos solo se envían de vuelta a la plataforma correspondiente
        (Facebook, Instagram o LinkedIn) al publicar contenido.
      </p>

      <h2 className={h2}>6. Conservación</h2>
      <p>
        Conservamos los datos mientras la cuenta permanezca conectada a la herramienta. Al
        desconectar una cuenta, eliminamos sus tokens de acceso. El contenido publicado permanece en
        la plataforma correspondiente según sus propias políticas.
      </p>

      <h2 className={h2}>7. Eliminación de datos</h2>
      <p>Para solicitar la eliminación de los datos asociados a tu cuenta:</p>
      <ol>
        <li>
          Escríbenos a{' '}
          <a href={`mailto:${contactEmail}`} className={link}>
            {contactEmail}
          </a>{' '}
          con el asunto &quot;Eliminación de datos&quot; e indica la cuenta o página afectada.
          Eliminaremos los datos en un plazo máximo de 30 días y te confirmaremos por correo.
        </li>
        <li>
          También puedes revocar el acceso de la app en cualquier momento:
          <ul>
            <li>
              <strong>Facebook / Instagram:</strong> Configuración de Facebook → Integraciones
              comerciales → &quot;Postiz&quot; → Eliminar.
            </li>
            <li>
              <strong>LinkedIn:</strong> Configuración → Privacidad de datos → Otras aplicaciones →
              Servicios permitidos → &quot;Postiz&quot; → Eliminar.
            </li>
          </ul>
        </li>
      </ol>

      <h2 className={h2}>8. Tus derechos</h2>
      <p>
        De acuerdo con la legislación chilena de protección de datos personales (Ley N° 19.628 y sus
        modificaciones), puedes solicitar acceso, rectificación o eliminación de tus datos
        escribiendo al correo indicado.
      </p>

      <h2 className={h2}>9. Cambios</h2>
      <p>
        Podemos actualizar esta política. La fecha de &quot;Última actualización&quot; indica la
        versión vigente.
      </p>

      <h2 className={h2}>10. Contacto</h2>
      <p>
        Estela Estudio Digital · Chile
        <br />
        <a href={`mailto:${contactEmail}`} className={link}>
          {contactEmail}
        </a>
      </p>
    </article>
  </Layout>
);

export default Privacidad;
