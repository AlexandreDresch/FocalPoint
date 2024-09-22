import { ITask } from "@/types";

import Image from "next/image";

import styles from "./styles.module.scss";

import { useAppDispatch } from "@/lib/store";
import { openModal, toggleTask } from "@/lib/slice";

export default function TaskItem({ id, title, done }: ITask) {
  const dispatch = useAppDispatch();

  function handleToggleTask() {
    dispatch(toggleTask(id));
  }

  function handleOpenDeleteModal() {
    dispatch(openModal({ type: "remove", taskId: id }));
  }

  return (
    <li key={id} className={styles["task-item-container"]}>
      <label>
        <input type="checkbox" checked={done} onChange={handleToggleTask} />
        <span className={done ? styles.done : ""}>{title}</span>
      </label>

      <button
        className={styles["delete-button"]}
        onClick={handleOpenDeleteModal}
        aria-label={`Deletar tarefa ${title}`}
      >
        <Image
          src="./icons/trash.svg"
          width={24}
          height={24}
          alt="Icone de Lixeira"
        />
      </button>
    </li>
  );
}
