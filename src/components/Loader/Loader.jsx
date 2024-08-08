import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loadingWindow}>
      <div className={styles.car}>
        <div className={styles.strike}></div>
        <div className={styles.strike}></div>
        <div className={styles.strike}></div>
        <div className={styles.strike}></div>
        <div className={styles.strike}></div>
        <div className={styles.strike}></div>
        <div className={styles.speed}>
          <div className={`${styles.carDetail} ${styles.center}`}></div>
          <div className={`${styles.carDetail} ${styles.center2}`}></div>
          <div className={`${styles.carDetail} ${styles.top}`}></div>
          <div className={`${styles.carDetail} ${styles.window}`}></div>
          <div className={`${styles.carDetail} ${styles.window}`}></div>
          <div className={`${styles.carDetail} ${styles.window}`}></div>
          <div className={`${styles.carDetail} ${styles.window}`}></div>
          <div className={`${styles.carDetail} ${styles.window}`}></div>
          <div className={`${styles.carDetail} ${styles.rearBumper}`}></div>
          <div className={`${styles.carDetail} ${styles.frontBumper}`}></div>
          <div className={`${styles.carDetail} ${styles.frontLight}`}></div>
          <div className={`${styles.carDetail} ${styles.wheel}`}></div>
          <div className={`${styles.carDetail} ${styles.wheel}`}></div>
          <div className={`${styles.carDetail} ${styles.door}`}></div>
        </div>
      </div>
      <div className={styles.text}>
        <span>Loading</span>
        <span className={styles.dots}>...</span>
      </div>
    </div>
  );
}
