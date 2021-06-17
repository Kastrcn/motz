import axios from "axios";
import { mozt } from "../../../utils/domain";

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getPageList(options?: { [key: string]: any }) {
  return axios(mozt + "/app/getPageList", {
    method: "POST",
    data: options || {},
  });
}
/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function add(options?: { [key: string]: any }) {
  return axios(mozt + "/app/add", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function del(options?: { [key: string]: any }) {
  return axios(mozt + "/app/delete", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function update(options?: { [key: string]: any }) {
  return axios(mozt + "/app/update", { method: "POST", data: options || {} });
}
