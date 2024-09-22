"use client";

import { useCallback, useMemo } from "react";

import { openModal } from "@/lib/slice";
import { useAppDispatch, useAppSelector } from "@/lib/store";

import Button from "../button";
import Modal from "../modal";
import TaskItem from "../task-item";

import styles from "./styles.module.scss";

export default function TaskContainer() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal({ type: "add" }));
  }, [dispatch]);

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.done),
    [tasks]
  );

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.done),
    [tasks]
  );

  const renderTaskList = useCallback(
    (taskList: typeof tasks, isDone: boolean) => {
      return taskList.length === 0 ? (
        <div className={styles["empty-message"]}>
          <p>
            Você não possui nenhuma tarefa {isDone ? "finalizada" : "pendente"}.
          </p>
        </div>
      ) : (
        <ul className={styles["task-container"]}>
          {taskList.map((task) => (
            <TaskItem {...task} key={task.id} />
          ))}
        </ul>
      );
    },
    []
  );

  return (
    <main className={styles["main-container"]}>
      <section className={styles["outer-container"]}>
        <h3 className={styles.heading}>Suas tarefas de hoje</h3>
        {renderTaskList(pendingTasks, false)}

        <h3 className={styles.heading}>Tarefas finalizadas</h3>
        {renderTaskList(completedTasks, true)}
      </section>

      <Modal />

      <Button
        className="button--primary button--large"
        onClick={handleOpenModal}
      >
        Adicionar tarefa
      </Button>
    </main>
  );
}
