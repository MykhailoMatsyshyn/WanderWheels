export default function Icon({
  id,
  width = "32",
  height = "32",
  fill = "#101828",
  stroke = "none",
}) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="false"
      role="svg"
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`../../assets/images/icons/sprite.svg#${id}`} />
    </svg>
  );
}
