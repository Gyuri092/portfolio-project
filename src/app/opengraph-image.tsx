import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Gyuri Gwon Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const poppinsRegular = fetch(
    new URL('/public/fonts/Poppins-Regular.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: '#2e268b',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Gyuri Gwon Portfolio
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: await poppinsRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
