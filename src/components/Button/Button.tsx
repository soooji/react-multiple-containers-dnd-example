import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <button
      className={classNames(styles.Button)}
      style={{ background: "red" }}
      {...props}
    >
      {children}
    </button>
  );
}
