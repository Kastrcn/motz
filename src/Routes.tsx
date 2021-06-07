import React from "react";
import Login from "./page/login";
import Layout from './layout/layout';
import { HomeOutlined,TeamOutlined,FileOutlined,SoundOutlined,DeploymentUnitOutlined ,ReadOutlined,SafetyCertificateOutlined,EuroOutlined,DashboardOutlined} from '@ant-design/icons';
import User from "./page/system/user";
import { Timers } from "./page/system/timers";
import Machine from "./page/system/machine";
import EmailSend from "./page/system/email";
import Test from "./page/system/test";
import Org from "./page/system/org";
import Pos from "./page/system/pos";
import Role from "./page/system/role";
import Config from "./page/system/config";
import SMS from "./page/system/sms";
import File from "./page/system/file";
import Dict from "./page/system/dict";
import WorkPlace from "./page/system/workplace";

export default [
    {
        path: "/login",
        component: Login,
        // component: ()=><div>123</div>,
    },
    {
        path: "/",
        component: Layout,
        routes: [

        {
            path: '/',
            name: '用户管理',
            exact: true,
            component: WorkPlace,
        },
        {
            path: '/workplace',
            name: '用户管理',
            exact: true,
            component: WorkPlace,
        },
        {
            path: '/sys/mgr_user',
            name: '用户管理',
            exact: true,
            component: User,
        },
        {
            path: '/sys/org',
            name: '机构管理',
            exact: true,
            component: Org,
        },
        {
            path: '/sys/pos',
            name: '机构管理',
            exact: true,
            component: Pos,
        },
        {
            path: '/auth/role',
            name: '机构管理',
            exact: true,
            component: Role,
        },
        {
            path: '/tools/config',
            name: '机构管理',
            exact: true,
            component: Config,
        },
        {
            path: '/tools/sms',
            name: '机构管理',
            exact: true,
            component: SMS,
        },

        {
            path: '/tools/dict',
            name: '字典管理',
            exact: true,
            component: Dict,
        },
        {
            path: '/file/file',
            name: '机构管理',
            exact: true,
            component: File,
        },
        {
            path: '/timers/timers',
            name: '任务管理',
            exact: true,
            component: Timers,
        },
        {
            path: '/monitor/machine',
            name: '用户管理',
            exact: true,
            component: Machine,
        },
        {
            path: '/tools/email',
            name: '用户管理',
            exact: true,
            component: EmailSend,
        },
    ]
    },
    
];
