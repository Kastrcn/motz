import axios from "axios"

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getPageList(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dictType/getPageList", { method: 'POST', data: options || {} });
}
/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function add(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dictType/add", { method: 'POST', data: options || {} });
}


/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function del(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dictType/delete", { method: 'POST', data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function update(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dictType/update", { method: 'POST', data: options || {} });
}


/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getDictPageList(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dict/getPageList", { method: 'POST', data: options || {} });
}




/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function ditcAdd(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dict/add", { method: 'POST', data: options || {} });
}


/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dictDel(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dict/delete", { method: 'POST', data: options || {} });
}



/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dictUpdate(options?: { [key: string]: any }) {
    return axios("http://localhost:8080/dict/update", { method: 'POST', data: options || {} });
}


/** 登录日志 POST /api/sysLoginLog/getPageList */
// export async function getPageList(options?: { [key: string]: any }) {
//     return request<GetPageList<system.LoginLog>>('/api/sysLoginLog/getPageList', {
//       method: 'POST',
//       data: options || {},
//     });
//   }