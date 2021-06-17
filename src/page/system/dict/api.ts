import axios from "axios";
import { mozt } from "../../../utils/domain";

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getPageList(options?: { [key: string]: any }) {
  return axios(mozt + "/dictType/getPageList", {
    method: "POST",
    data: options || {},
  });
}
/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function add(options?: { [key: string]: any }) {
  return axios(mozt + "/dictType/add", {
    method: "POST",
    data: options || {},
  });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function del(options?: { [key: string]: any }) {
  return axios(mozt + "/dictType/delete", {
    method: "POST",
    data: options || {},
  });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function update(options?: { [key: string]: any }) {
  return axios(mozt + "/dictType/update", {
    method: "POST",
    data: options || {},
  });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getDictPageList(options?: { [key: string]: any }) {
  return axios(mozt + "/dict/getPageList", {
    method: "POST",
    data: options || {},
  });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function ditcAdd(options?: { [key: string]: any }) {
  return axios(mozt + "/dict/add", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dictDel(options?: { [key: string]: any }) {
  return axios(mozt + "/dict/delete", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dictUpdate(options?: { [key: string]: any }) {
  return axios(mozt + "/dict/update", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
// export async function getPageList(options?: { [key: string]: any }) {
//     return request<GetPageList<system.LoginLog>>('/api/sysLoginLog/getPageList', {
//       method: 'POST',
//       data: options || {},
//     });
//   }
