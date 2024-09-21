import { IHeader } from "@/types";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header({ name }: IHeader) {
  return (
    <header className={styles["header-container"]}>
      <Link href="/" className={styles["header-logo"]}>
        <Image src="/logo.svg" alt="Focal Point Logo" width={150} height={36} priority />
      </Link>

      <p className={styles["welcome-message"]}>Bem-vindo de volta, {name}</p>
      <p className={styles["current-date"]}>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
}
