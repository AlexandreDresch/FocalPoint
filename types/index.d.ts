import React from "react";

export interface IHeader {
  name: string;
}

export interface IButton {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | undefined;
}

export interface ITask {
  id: number;
  title: string;
  date: Date;
  done: boolean;
}

export interface IModal {
  isOpen: boolean;
  type: "add" | "remove" | null;
  taskId?: number;
}

export interface IFormData {
  title: string;
}
