import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';


export const metadata: Metadata  = {
  title: "Zoomeet",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};








const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;