'use client';

import { Header } from '@/components/Header/Header.client';
import { RecoilRoot } from 'recoil';

export default function Page() {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <h1>Hello, Home page!</h1>
      </div>
    </RecoilRoot>
  );
}
