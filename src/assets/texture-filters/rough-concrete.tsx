export interface RoughConcreteProps {
  className: string;
}
export default function RoughConcrete({ className }: RoughConcreteProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.225"
            numOctaves="1"
            result="noise"
          />

          <feDiffuseLighting
            in="noise"
            lightingColor="#e7e5e4"
            surfaceScale="0.7"
            result="light"
          >
            <feDistantLight azimuth="45" elevation="70" />
          </feDiffuseLighting>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
