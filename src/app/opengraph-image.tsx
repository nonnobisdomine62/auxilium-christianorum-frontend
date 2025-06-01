import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Auxilium Christianorum Prayers';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Auxilium Christianorum
        </div>
        <div
          style={{
            fontSize: 30,
            opacity: 0.8,
          }}
        >
          Daily Prayers for Members
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 