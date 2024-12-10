import { useChildMachineState } from "@/machines/useMyMachines.ts";


export const Timer = () => {
    const timerValue: any = useChildMachineState('newEntry', (state: any) => state.context.timerValue);

    // Format duration to HH:MM:SS
    const formattedValue = new Date(timerValue * 1000).toISOString().slice(11, 19);

    return (
        <div>
            {formattedValue}
        </div>
    );
};

