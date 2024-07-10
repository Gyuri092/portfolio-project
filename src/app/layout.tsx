import '@/styles/global.scss';
import type { Metadata } from 'next';
import RecoilRootWrapper from './RecoilRootWrapper';

export const metadata: Metadata = {
  title: 'Gyuri-Portpolio',
  description: 'This is Gyuri’s portfolio website.',
  openGraph: {
    title: 'Gyuri-Portpolio',
    description: 'This is Gyuri’s portfolio website.',
    url: 'https://gyuri-portfolio.vercel.app',
    images: 'https://gyuri-portfolio.vercel.app/opengraph-image.png',
    siteName: 'Gyuri-Portpolio',
    locale: 'ko_KR',
    type: 'website',
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
