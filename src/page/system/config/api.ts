import axios from "axios";
import { mozt } from "../../../utils/domain";

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function dropDown(options?: { [key: string]: any }) {
  return axios(mozt + "/dictType/dropDown", {
    method: "POST",
    data: options || {},
  });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function add(options?: { [key: string]: any }) {
  return axios(mozt + "/config/add", { method: "POST", data: options || {} });
}

/** 登录日志 POST /api/sysLoginLog/getPageList */
export async function getPageList(options?: { [key: string]: any }) {
  return axios(mozt + "/config/getPageList", {
    method: "POST",
    data: options || {},
  });
}
