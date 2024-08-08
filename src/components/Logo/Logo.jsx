import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <img
        src="../../../public/logo.svg"
        alt="Wander Wheels Logo Icon"
        className={css.logoIcon}
        width="46"
        height="32"
      />
      <p>Wander Wheels</p>
    </>
  );
}
