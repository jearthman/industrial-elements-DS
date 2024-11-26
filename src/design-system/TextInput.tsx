import { useLayoutEffect, useRef } from "react";
import "./TextInput.css";

export interface TextInputProps {
  placeholder?: string;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
}
export default function TextInput({
  placeholder,
  prepend,
  append,
}: TextInputProps) {
  const appendRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (appendRef.current && inputRef.current) {
      const appendWidth = appendRef.current.offsetWidth;
      inputRef.current.style.paddingRight = `${appendWidth}px`;
    }
  }, [append]);

  return (
    <div className="text-input">
      {prepend}
      <input ref={inputRef} type="text" placeholder={placeholder} />
      <div className="append-ref" ref={appendRef}>
        {append}
      </div>
    </div>
  );
}
