'use client';

export default function GridBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: 'url(/grid.svg)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
        opacity: 0.2,
      }}
    />
  );
}
