import './Button.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'large';
}
export default function Button({ label, variant, size }: ButtonProps) {
  return (
    <div className="button-wrapper">
      <button className={`button button-${variant} button-${size}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="background-texture">
          <defs>
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.15"
                numOctaves="3"
                result="noise"
              />

              <feDiffuseLighting
                in="noise"
                lighting-color="#e7e5e4"
                surfaceScale="0.7"
                result="light"
              >
                <feDistantLight azimuth="45" elevation="70" />
              </feDiffuseLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <span className="button-label">{label}</span>
      </button>
    </div>
  );
}