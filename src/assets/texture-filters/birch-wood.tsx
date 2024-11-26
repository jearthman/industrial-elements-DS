export default function BirchWood({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <filter id="birch-wood-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".5 .04"
          numOctaves="2"
        />
        <feColorMatrix
          values="0 0 0 .25 .85
                  0 0 0 .14 .78
                  0 0 0 .08 .70
                  0 0 0 0 1"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#birch-wood-filter)" />
    </svg>
  );
}
