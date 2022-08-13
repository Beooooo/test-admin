import { isEmpty } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import localStorageHelper, { KeyStorage } from "../utils/localStorage";
import { Session } from "../utils/session";

interface IDataContent {
    dataInfo: Session | null,
    loginAdmin?: any
    logoutAdmin?: any
}

const AuthContext = createContext<IDataContent | null>(null)

export const AuthProvider = ({ children }: any) => {
    const [dataInfo, setDataInfo] = useState<Session | null>(null)
    const location = useLocation()

    useEffect(() => {
        const dataSection: Session = localStorageHelper.getObject(KeyStorage.SESSION)
        if (!isEmpty(dataSection)) setDataInfo(dataSection)
        else setDataInfo(null)
    }, [location.pathname])

    const loginAdmin = (data: Session) => {
        setDataInfo(data)
        localStorageHelper.setObject(KeyStorage.SESSION, data)
    }

    const logoutAdmin = () => {
        setDataInfo(null)
        localStorageHelper.remove(KeyStorage.SESSION)
    }

    return (
        <AuthContext.Provider value={{ dataInfo, loginAdmin, logoutAdmin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}