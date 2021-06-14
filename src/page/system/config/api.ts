import axios from "axios";

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dropDown(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dictType/dropDown", { method: 'POST', data: options || {} });
}



/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function add(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/config/add", { method: 'POST', data: options || {} });
}



/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getPageList(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/config/getPageList", { method: 'POST', data: options || {} });
}