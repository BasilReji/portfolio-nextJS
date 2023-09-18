import React from "react";
import style from "./style.module.scss";
export function HandLoader() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.hand}>
        <span className={style.finger + style.thumb}></span>
        <span className={style.finger}></span>
        <span className={style.finger}></span>
        <span className={style.finger}></span>
        <span className={style.finger}></span>
        <span className={style.palm}></span>
      </div>
    </div>
  );
}
