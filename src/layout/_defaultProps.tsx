import React from "react";
import {
  HomeOutlined,
  TeamOutlined,
  FileOutlined,
  SoundOutlined,
  DeploymentUnitOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  EuroOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "主控面板",
        icon: <HomeOutlined />,
        redirect: "/analysis",
        component: "./Welcome",
        routes: [
          {
            path: "/workplace",
            name: "工作台",
            component: "./Welcome",
          },
          {
            path: "/analysis",
            name: "分析页面",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/sys",
        name: "组织架构",
        icon: <TeamOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/sys/mgr_user",
            name: "用户管理",
            component: "./system/user",
          },
          {
            path: "/sys/org",
            name: "机构管理",
            component: "./Welcome",
          },
          {
            path: "/sys/pos",
            name: "职位管理",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/auth",
        name: "权限管理",
        icon: <SafetyCertificateOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/auth/app",
            name: "应用管理",
            component: "./Welcome",
          },
          {
            path: "/auth/menu",
            name: "菜单管理",
            component: "./Welcome",
          },
          {
            path: "/auth/role",
            name: "角色管理",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/tools",
        name: "开发管理",
        icon: <EuroOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/tools/config",
            name: "系统配置",
            component: "./Welcome",
          },
          {
            path: "/tools/email",
            name: "邮件发送",
            component: "./Welcome",
          },
          {
            path: "/tools/sms",
            name: "短信管理",
            component: "./Welcome",
          },
          {
            path: "/tools/dict",
            name: "字典管理",
            component: "./Welcome",
          },
          {
            path: "/tools/swagger",
            name: "接口文档",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/log",
        name: "日志管理",
        icon: <ReadOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/log/vislog",
            name: "访问日志",
            component: "./Welcome",
          },
          {
            path: "/log/oplog",
            name: "操作日志",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/monitor",
        name: "系统监控",
        icon: <DeploymentUnitOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/monitor/machine",
            name: "服务监控",
            component: "./Welcome",
          },
          {
            path: "/monitor/onlineUser",
            name: "在线用户",
            component: "./Welcome",
          },
          {
            path: "/monitor/druid",
            name: "数据监控",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/notice",
        name: "通知公告",
        icon: <SoundOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/notice/notice",
            name: "公告管理",
            component: "./Welcome",
          },
          {
            path: "/notice/noticeReceived",
            name: "已收公告",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/file",
        name: "文件管理",
        icon: <FileOutlined />,
        component: "./Welcome",
        routes: [
          {
            path: "/file/file",
            name: "系统文件",
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/timers",
        name: "定时任务",
        icon: <DashboardOutlined />,
        routes: [
          {
            path: "/timers/timers",
            name: "任务管理",
            component: "./Welcome",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
};
