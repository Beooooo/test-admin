import { isEmpty } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import localStorageHelper, { KeyStorage } from "../utils/localStorage";
import { Session } from "../utils/session";

interface IDataContent {
    dataStep?: number,
    onChangeStep?: (data: number) => void
}

const StepContext = createContext<IDataContent | any>(null)

export const StepProvider = ({ children }: any) => {
    const [dataStep, setDataStep] = useState<number>(1)

    const onChangeStep = (data: number) => {
        setDataStep(data)
    }

    return (
        <StepContext.Provider value={{ dataStep, onChangeStep }}>
            {children}
        </StepContext.Provider>
    )
}

export const useStepContext = () => {
    return useContext(StepContext)
}