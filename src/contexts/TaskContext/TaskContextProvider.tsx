import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext.tsx";
import { taskReducer } from "./taskReducer.ts";
import { TimerWorkerManager } from "../../workers/timerWorkerManager.ts";
import { TaskActionTypes } from "./taskActions.ts";
import { loadBeep } from "../../utils/loadBeep.ts";

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer( taskReducer, initialTaskState);
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
            if (playBeepRef.current) {
                playBeepRef.current();
                playBeepRef.current = null;
            };
            dispatch({
                type: TaskActionTypes.COMPLETE_TASK
            });
            worker.terminate();
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds }
            });
        };
    });

    useEffect(() => {
        if (!state.activeTask) {
            worker.terminate();
        };

        worker.postMessage(state);
    }, [worker, state]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        };
    }, [state.activeTask]);

    return (
    <TaskContext.Provider value={{ state, dispatch }}>
        {children}
    </TaskContext.Provider>
    );
};