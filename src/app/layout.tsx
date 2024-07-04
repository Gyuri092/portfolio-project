import '@/styles/global.scss';
import RecoilRootWrapper from './RecoilRootWrapper';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Gyuri-Portpolio',
//   description: 'This is Gyuri’s portfolio website.',
// };

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
