import * as React from 'react';
import {render as renderAmis, RenderOptions} from 'amis'

import {message} from 'antd'
import copy from 'copy-to-clipboard';
import { useSetting } from './hooks/useSetting.ts';
import axios from "axios"


const AmisRender = ({schema, className = ''}: any) => {
    const {getSetting} = useSetting()

    const options: RenderOptions = {
        enableAMISDebug: getSetting('show_development_tools'),
        fetcher: ({ url, method, data, responseType, config, headers }: any) => {
            config = config || {};
            config.withCredentials = true;
            responseType && (config.responseType = responseType);

            if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(
                  config.cancelExecutor
                );
            }

            config.headers = headers || {};

            if (method !== 'post' && method !== 'put' && method !== 'patch') {
                if (method !== 'post' && method !== 'put' && method !== 'patch') {
                    if (data) {
                        config.params = data;
                    }

                    return (axios as any)[method](url, config);
                } else if (data && data instanceof FormData) {
                    config.headers = config.headers || {};
                    config.headers['Content-Type'] = 'multipart/form-data';
                } else if (
                  data &&
                  typeof data !== 'string' &&
                  !(data instanceof Blob) &&
                  !(data instanceof ArrayBuffer)
                ) {
                    data = JSON.stringify(data);
                    config.headers = config.headers || {};
                    config.headers['Content-Type'] = 'application/json';
                }

                return (axios as any)[method](url, data, config);
            }

        },
        isCancel: (value: any) => (axios as any).isCancel(value),
        copy: async (content) => {
            copy(content);
            message.success('Copy success')
        },
    }


    return (
        <div className={className}>
            {renderAmis(schema, {}, options)}
        </div>
    )
}



export const fetcher = ({
                            url,
                            method,
                            data,
                            responseType,
                            config,
                            headers,
                        }: any) => {
    url = url.indexOf("http") !== -1 ? url : import.meta.env.VITE_API_URL + url;
    let newData = data;
    const newConfig = config || {};
    newConfig.withCredentials = true;
    newConfig.getResponse = true;
    newConfig.method = method;
    if (responseType) {
        newConfig.responseType = responseType;
    }
    newConfig.headers = headers || {};
    newConfig.headers["Accept"] = "application/json";
    newConfig.headers["Type"] = "pc";
    if (newData && newData instanceof FormData) {
        newConfig.headers = newConfig.headers || {};
        newConfig.headers["Content-Type"] = "multipart/form-data";
    } else if (
      newData &&
      typeof newData !== "string" &&
      !(newData instanceof Blob) &&
      !(newData instanceof ArrayBuffer)
    ) {
        newData = JSON.stringify(newData);
        newConfig.headers = config.headers || {};
        newConfig.headers["Content-Type"] = "application/json";
    }

    return axios(url, { method, data: newData, ...newConfig });
};
