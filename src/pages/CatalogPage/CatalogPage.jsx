import CamperList from "../../components/CamperList/CamperList";
import Filter from "../../components/Filter/Filter";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <Filter />
      <CamperList />
    </div>
  );
}
