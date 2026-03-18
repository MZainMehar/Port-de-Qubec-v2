import './globals.css';
import NoRightClick from '@/components/ui/NoRightClick';

export const metadata = {
  title: 'Port de Québec — Kiosk',
  description: 'Interactive kiosk for Port de Québec',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NoRightClick />
        {children}
      </body>
    </html>
  );
}
