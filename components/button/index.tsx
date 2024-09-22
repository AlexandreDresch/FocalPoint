import { IButton } from "@/types";
import styles from "./styles.module.scss";

export default function Button({
  onClick,
  children,
  className = "",
  type = "button",
}: IButton) {
  const classes = className
    .split(" ")
    .map((cls) => styles[cls] || cls)
    .join(" ");

  return (
    <button
      className={`${styles['button-container']} ${classes}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
