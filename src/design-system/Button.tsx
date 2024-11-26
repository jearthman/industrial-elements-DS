import "./Button.css";
import RoughConcrete from "../assets/texture-filters/rough-concrete";
import BrushedSteel from "../assets/texture-filters/brushed-steel";
import BirchWood from "../assets/texture-filters/birch-wood";
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large" | "icon";
  material?: "rough-concrete" | "brushed-steel" | "birch-wood";
  grandparentBackground?: "background" | "surface" | "card";
  flat?: boolean;
}
export default function Button({
  children = "Button",
  variant = "primary",
  size = "medium",
  material = "rough-concrete",
  grandparentBackground = "background",
  flat = false,
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} button-${size} ${grandparentBackground} ${material} ${
        flat ? "flat" : ""
      } `}
    >
      {variant !== "tertiary" && material === "rough-concrete" && (
        <>
          <RoughConcrete className="background-texture-bezel" />
          <RoughConcrete className="background-texture" />
        </>
      )}
      {variant !== "tertiary" && material === "brushed-steel" && (
        <>
          <BrushedSteel className="background-texture-bezel" />
          <BrushedSteel className="background-texture" />
        </>
      )}
      {variant !== "tertiary" && material === "birch-wood" && (
        <>
          <BirchWood className="background-texture-bezel" />
          <BirchWood className="background-texture" />
        </>
      )}
      {variant !== "tertiary" && (
        <>
          <div className="lighting-mask-bezel"></div>
          <div className={`lighting-mask`}></div>
        </>
      )}
      <span className="button-label">{children}</span>
    </button>
  );
}
