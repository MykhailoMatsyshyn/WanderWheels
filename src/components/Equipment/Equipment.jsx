import css from "./Equipment.module.css";
import { Icon } from "../Icon/Icon";

export default function Equipment({ iconParams, label }) {
  return (
    <div className={css.equipmentItem}>
      <Icon
        {...iconParams}
        width="20px"
        height="20px"
        // fill="#101828"
        // stroke="#101828"
      />
      <span className={css.label}>{label}</span>
    </div>
  );
}
