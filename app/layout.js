import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  metadataBase: new URL('https://podologiaorlan.cl'),
  title: 'Podología Orlan | Podología en Las Condes',
  description: 'Podología Orlan: más de 25 años cuidando tus pies en Las Condes. Podología, pie diabético, masoterapia, uña encarnada y domicilios.',
  keywords: ['podología Las Condes', 'podólogo Las Condes', 'pie diabético Las Condes', 'uña encarnada', 'masoterapia', 'podología a domicilio'],
  openGraph: {
    title: 'Podología Orlan | Más de 25 años en Las Condes',
    description: 'Atención profesional en podología, pie diabético, masoterapia, onicocriptosis y domicilios.',
    url: 'https://podologiaorlan.cl',
    siteName: 'Podología Orlan',
    images: [{ url: '/foto-portada.jpeg', width: 1200, height: 900 }],
    locale: 'es_CL',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
