import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ children, background = true, onClick }) {
  return (
    <button
      className={clsx(css.baseStyle, background ? "" : css.border)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
