import { useContext } from "react";
import { TaskContext } from "./TaskContext.tsx";

export function useTaskContext() {
    return useContext(TaskContext);
};