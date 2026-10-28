import type { Metadata } from 'next';
import { ReactNode } from 'react';
import TanStackProvider from '../../../../components/TanStackProvider/TanStackProvider';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import '../../../../globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Manage your notes efficiently',
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal} {/* Рендерим модалку на одном уровне с контентом */}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
