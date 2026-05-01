import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function CycleInfo() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por: {state.config.workTime}min</span>,
        shortBreakTime: <span>Faça uma pausa de: {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanse por: {state.config.longBreakTime}min!</span>
    };

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de: {state.config.workTime}min</span>,
        shortBreakTime: <span>Próxima pausa é de: {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso é de: {state.config.longBreakTime}min!</span>
    };

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    );
};