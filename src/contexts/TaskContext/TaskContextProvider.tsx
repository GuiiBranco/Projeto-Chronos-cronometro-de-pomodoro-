import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext.tsx";
import { taskReducer } from "./taskReducer.ts";
import { TimerWorkerManager } from "../../workers/timerWorkerManager.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer( taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;
        console.log(countDownSeconds);

        if (countDownSeconds <= 0) {
            console.log('Worker COMPLETED');
            worker.terminate();
        }
    });

    useEffect(() => {
        if (!state.activeTask) {
            console.log('Worker terminado por falta de activeTask');
            worker.terminate();
        };

        worker.postMessage(state);
    }, [worker, state]);

    return (
    <TaskContext.Provider value={{ state, dispatch }}>
        {children}
    </TaskContext.Provider>
    );
};