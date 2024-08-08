import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({ children, background = true }) {
  return (
    <button className={clsx(css.baseStyle, background ? "" : css.border)}>
      {children}
    </button>
  );
}
