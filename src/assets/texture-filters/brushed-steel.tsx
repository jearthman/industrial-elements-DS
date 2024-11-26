export default function BrushedSteel({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <filter id="brushed-steel-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".003 .5"
          numOctaves="5"
        />
        <feColorMatrix
          values="0 0 0 .25 .65
                  0 0 0 .25 .65
                  0 0 0 .25 .67
                  0 0 0 0 1"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#brushed-steel-filter)" />
    </svg>
  );
}
