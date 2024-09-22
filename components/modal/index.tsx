"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../button";

import styles from "./styles.module.scss";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { addTask, closeModal, removeTask } from "@/lib/slice";

import { taskSchema } from "@/schemas/task-schema";

import { IFormData } from "@/types";

export default function Modal() {
  const modal = useAppSelector((state) => state.tasks.modal);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: modal.type === "add" ? zodResolver(taskSchema) : undefined,
  });

  const handleCloseModal = () => {
    reset();
    dispatch(closeModal());
  };

  const handleAddTask = (data: IFormData) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      date: new Date(),
      done: false,
    };

    dispatch(addTask(newTask));
    handleCloseModal();
  };

  const handleDeleteTask = () => {
    if (modal.taskId !== undefined) {
      dispatch(removeTask(modal.taskId));
      handleCloseModal();
    }
  };

  const onSubmit = (data: IFormData) => {
    if (modal.type === "add") {
      handleAddTask(data);
    } else {
      handleDeleteTask();
    }
  };

  if (!modal.isOpen) return null;

  return (
    <div className={styles["overlay-container"]}>
      <div className={styles["modal-container"]}>
        <h2>{modal.type === "add" ? "Nova tarefa" : "Deletar tarefa"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {modal.type === "add" ? (
            <div className={styles["input-container"]}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                placeholder="Digite"
                {...register("title")}
                aria-invalid={!!errors.title}
              />
              {errors.title && (
                <p
                  className={styles["error-message"]}
                  role="alert"
                  aria-live="assertive"
                >
                  {errors.title.message}
                </p>
              )}
            </div>
          ) : (
            <p className={styles.description}>
              Tem certeza que você deseja deletar essa tarefa?
            </p>
          )}

          <div className={styles["button-container"]}>
            <Button
              type="button"
              className="button--secondary button--medium"
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              className={`${
                modal.type === "add" ? "button--primary" : "button--danger"
              } button--medium`}
            >
              {modal.type === "add" ? "Adicionar" : "Deletar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
