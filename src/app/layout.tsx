import '@/styles/global.scss';
import type { Metadata } from 'next';
import RecoilRootWrapper from './RecoilRootWrapper';

export const metadata: Metadata = {
  title: 'Gyuri-Portpolio',
  description: 'This is Gyuri’s portfolio website.',
  openGraph: {
    title: 'Gyuri-Portpolio',
    description: 'This is Gyuri’s portfolio website.',
    images: '/og-image.png',
    siteName: 'Gyuri-Portpolio',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
