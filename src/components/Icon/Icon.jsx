import sprite from "../../assets/images/icons/sprite.svg";

export const Icon = ({
  id,
  width = "32",
  height = "32",
  fill = "#101828",
  stroke = "none",
}) => (
  <svg
    width={width}
    height={height}
    aria-hidden="false"
    role="svg"
    fill={fill}
    stroke={stroke}
  >
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);
