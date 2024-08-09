import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
