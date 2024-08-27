import { useEffect } from "react";
import CamperList from "../../components/CamperList/CamperList";
import Filter from "../../components/Filter/Filter";
import css from "./CatalogPage.module.css";
import toast from "react-hot-toast";

export default function CatalogPage() {
  useEffect(() => {
    const success = sessionStorage.getItem("formSubmitSuccess");
    if (success) {
      toast.success(
        "Booking successful! 🎉\n Your campervan awaits for your upcoming trip.",
        {
          duration: 5000,
        }
      );
      sessionStorage.removeItem("formSubmitSuccess");
    }
  }, []);

  return (
    <div className={css.container}>
      <Filter />
      <CamperList />
    </div>
  );
}
