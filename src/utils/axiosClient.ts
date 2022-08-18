
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import moment from 'moment';
import queryString from 'query-string';
import localStorageHelper, { KeyStorage } from './localStorage';
import { getSession } from './session';

const getLabelLogRequest = (config: AxiosRequestConfig) => {
    const method = String(config.method).toUpperCase();
    const url = config.url;
    return `${moment().format('HH:mm:ss:SSS')} <<< ${method} ${url}`;
};

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    timeout: 10000,
    paramsSerializer: (params) => queryString.stringify(params)
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        // Do something before request is sent
        return config;
    },
    function (error: AxiosError) {
        // Do something with request error
        if (!error.response) {
            return { message: error.message, error: error.message };
        }
        return error.response.data;
    }
);

instance.interceptors.response.use(
    function (response: AxiosResponse) {
        if (process.env.NODE_ENV !== 'production') {
            const labelLog = getLabelLogRequest(response.config);
            console.groupCollapsed(labelLog);
            Object.keys(response.config.params || {}).length &&
                console.log('params', response.config.params);
            response.config.data && console.log('data', response.config.data);
            console.log('response', response.data);
            console.groupEnd();
        }
        return response.data;
    },
    function (error: AxiosError<any>) {
        const response = error?.response;
        if (typeof error.response?.data === 'object') {
            if (response?.status) {
                return { error: error, message: error.message, ...response?.data };
            }
        }
        return { message: error.message, error: error.message };
    }
);

export type HeaderConf = {
    authorization?: boolean;
    locale?: string;
} & Record<string, unknown>;

export type Res<T = any> = T & {
    error?: string;
    message?: string;
};

export type ListParams<T = any> = T & {
    limit?: number;
    page?: number;
};

export type ListRes<T = any> = Res<{
    items: T[];
    total: number;
}>;

export const getAccessToken = async () => {
    const session = await getSession();
    if (session) {
        return session?.token;
    }
    return null;
};

export const getHeader = async (headerConf: HeaderConf = {}) => {
    const { authorization, locale, ...reset } = headerConf;
    const headers = { ...reset };
    if (authorization) {
        headers['Authorization'] = await getAccessToken();
    }
    if (locale) {
        headers['Accept-Language'] = locale;
    } else {
        headers['Accept-Language'] = localStorageHelper.getObject(KeyStorage.LOCALE)?.locale;
    }
    return headers as AxiosRequestHeaders;
};

const axiosClient = {
    async get<T = any, P = Record<string, unknown>>(
        url: string,
        params?: P,
        headerConf?: HeaderConf
    ) {
        const headers = await getHeader(headerConf);
        return instance.get<any, T>(url, { params, headers });
    },
    async post<T = any, D = Record<string, unknown>>(url: string, data: D, headerConf?: HeaderConf) {
        const headers = await getHeader(headerConf);
        return instance.post<any, T>(url, data, { headers });
    },
    async postFormData<T = any, D = Record<string, unknown>>(url: string, data: FormData, headerConf?: HeaderConf) {
        const headers = await getHeader(headerConf);
        return instance.post<any, T>(url, data, { headers });
    },
    async put<T = any, D = Record<string, unknown>>(url: string, data: D, headerConf?: HeaderConf) {
        const headers = await getHeader(headerConf);
        return instance.put<any, T>(url, data, { headers });
    },
    async delete<T = any>(url: string, headerConf?: HeaderConf) {
        const headers = await getHeader(headerConf);
        return instance.delete<any, T>(url, { headers });
    }
};

export default axiosClient;
