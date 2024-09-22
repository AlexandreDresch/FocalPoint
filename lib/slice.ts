import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModal, ITask } from "@/types";

interface TasksState {
  tasks: ITask[];
  modal: IModal;
}

const defaultTasks: ITask[] = [
  { id: 1, title: "Estudar React", done: false, date: new Date() },
  { id: 2, title: "Limpar casa", done: true, date: new Date() },
  { id: 3, title: "Comprar pão", done: false, date: new Date() },
];

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

const saveTasksToLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const loadTasks = (): ITask[] => {
  const tasksFromStorage = getFromLocalStorage("tasks");
  const today = new Date();

  if (tasksFromStorage) {
    const parsedTasks: ITask[] = JSON.parse(tasksFromStorage);

    const validTasks = parsedTasks.filter((task) =>
      isSameDay(new Date(task.date), today)
    );

    if (validTasks.length === 0) {
      localStorage.removeItem("tasks");
      return [];
    }

    return validTasks;
  }

  return defaultTasks;
};

const initialState: TasksState = {
  tasks: loadTasks(),
  modal: {
    isOpen: false,
    type: null,
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
      saveTasksToLocalStorage(state.tasks);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    openModal: (
      state,
      action: PayloadAction<{ type: "add" | "remove"; taskId?: number }>
    ) => {
      state.modal.isOpen = true;
      state.modal.type = action.payload.type;
      state.modal.taskId = action.payload.taskId;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.type = null;
      state.modal.taskId = undefined;
    },
  },
});

export const { addTask, toggleTask, removeTask, openModal, closeModal } =
  tasksSlice.actions;

export default tasksSlice.reducer;
