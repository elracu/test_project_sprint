const MUSTARD = '#D4A017';
const FUCHSIA = '#FF00FF';
const PIXEL = 8;

// Classic Space Invaders alien — 1=mustard, 2=fuchsia, 0=transparent
const alienPixels = [
  [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0],
];

function SpaceInvader() {
  return (
    <div style={{ position: 'absolute', top: 16, right: 16, imageRendering: 'pixelated' }}>
      {alienPixels.map((row, r) => (
        <div key={r} style={{ display: 'flex' }}>
          {row.map((px, c) => (
            <div
              key={c}
              style={{
                width: PIXEL,
                height: PIXEL,
                backgroundColor:
                  px === 1 ? MUSTARD : px === 2 ? FUCHSIA : 'transparent',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-pink-200">
      <SpaceInvader />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold text-white">Raul Marquez</h1>
        <p className="text-2xl text-white">elracu</p>
      </div>
    </div>
  );
}
