import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <Filter />
      <CardList />
    </div>
  );
}
