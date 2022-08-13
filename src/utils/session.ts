import { merge } from 'lodash';
import moment from 'moment';
import localStorageHelper, { KeyStorage } from './localStorage';

export type Session = {
    data: { _id: string, name: string, email: string }
    expiresAt: string
    refreshToken: string
    status: string
    token: string
};

export const setSession = (session: Session | null) => {
    localStorageHelper.setObject(KeyStorage.SESSION, session);
};

export const refreshToken = async () => {
    return {};
};

export const getSession = async () => {
    try {
        const session = localStorageHelper.getObject<Session | null>(KeyStorage.SESSION, null);
        if (session) {
            if (moment(session?.expiresAt) > moment().add(1, 'minute')) {
                const result = await refreshToken();
                if (result) {
                    const newSession: Session = merge(session, result);
                    setSession(newSession);
                    return newSession;
                }
            }
            return session as Session;
        }
    } catch (error) { }
    setSession(null);
    return null;
};
