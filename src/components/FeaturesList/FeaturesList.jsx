import { useEffect, useState } from "react";
import { EQUIPMENT } from "../../constants";
import Equipment from "../Equipment/Equipment";
import css from "./FeaturesList.module.css";

export default function FeaturesList({ camper, id, height }) {
  const [isScrollable, setIsScrollable] = useState(false);
  const { details } = camper;

  useEffect(() => {
    const listHeight = document.getElementById(id).scrollHeight;
    if (listHeight > height) {
      setIsScrollable(true);
    }
  }, [details, height, id]);

  return (
    <div
      id={id}
      className={css.featuresList}
      style={{
        maxHeight: isScrollable ? `${height}px` : "auto",
        overflowY: isScrollable ? "auto" : "hidden",
      }}
    >
      {EQUIPMENT.map((item) => {
        const value = details[item.name];
        if (!value) return null;

        const label =
          item.name === "gas" || item.name === "water"
            ? `${item.label} ${value}`
            : value > 1
            ? `${value} ${item.label}s`
            : item.label;

        return (
          <Equipment
            key={item.name}
            label={label}
            value={item.name === "gas" || item.name === "water" ? "" : value}
            iconParams={item.iconParams}
          />
        );
      })}
    </div>
  );
}
