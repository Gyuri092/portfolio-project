import '@/styles/global.scss';
import type { Metadata } from 'next';
import { RecoilRootWrapper } from './RecoilRootWrapper';

export const metadata: Metadata = {
  title: 'Gyuri-Portpolio',
  description: 'This is Gyuri’s portfolio website.',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
