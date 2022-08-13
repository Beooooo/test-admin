export enum KeyStorage {
    SESSION = 'session',
    LOCALE = 'locale'

}

const localStorageHelper = {
    set: (key: KeyStorage, value: string): boolean => {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) { }
        return false;
    },
    setObject: (key: KeyStorage, value: unknown): boolean => {
        try {
            const newValue = JSON.stringify(value);
            localStorage.setItem(key, newValue);
            return true;
        } catch (error) { }
        return false;
    },
    get: (key: KeyStorage, defaultValue: string | null = null): string | null => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                return value;
            }
        } catch (error) { }
        return defaultValue;
    },

    getObject: <Result = Record<string, unknown>>(
        key: KeyStorage,
        defaultValue: Result = {} as Result
    ): Result => {
        try {
            const value = localStorage.getItem(key);
            if (value) {
                const object = JSON.parse(value);
                return object || defaultValue;
            }
        } catch (error) { }
        return defaultValue;
    },
    remove: (key: KeyStorage) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
};

export default localStorageHelper;
