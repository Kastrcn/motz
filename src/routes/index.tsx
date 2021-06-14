import Login from "../page/login";
import Layout from '../layout/layout';
import User from "../page/system/user";
import { Timers } from "../page/system/timers";
import Machine from "../page/system/machine";
import EmailSend from "../page/system/email";
import Org from "../page/system/org";
import Pos from "../page/system/pos";
import Role from "../page/system/role";
import Config from "../page/system/config";
import SMS from "../page/system/sms";
import File from "../page/system/file";
import Dict from "../page/system/dict";
import WorkPlace from "../page/system/workplace";
import Pay from "../page/pay";
import DataBaseInfo from "../page/database/databaseInfo";
import TenantInfo from "../page/tenantInfo";
import VisLog from "../page/system/vislog";
import OpLog from "../page/system/oplog";
import Analysis from "../page/analysis";
import OnlineUser from "../page/onlineUser";
import Notice from "../page/system/notice";
import NoticeReceived from "../page/system/noticeReceived";
import ToDoTask from "../page/flowable/task/todoTask";
import DoneTask from "../page/flowable/task/doneTask";
import Applyed from "../page/flowable/applyed";
import Draft from "../page/flowable/draft";
import Drafapply from "../page/flowable/drafapply";
import Alipay from "../page/pay/alipay";
import Swagger from "../page/system/swagger";

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
            }, {
                path: '/pay/index',
                name: '用户管理',
                exact: true,
                component: Pay,
            }, {
                path: '/pay/alipay/index',
                name: '用户管理',
                exact: true,
                component: Alipay,
            }, {
                path: '/databaseInfo',
                name: '用户管理',
                exact: true,
                component: DataBaseInfo,
            },
            {
                path: '/tenantInfo',
                name: '用户管理',
                exact: true,
                component: TenantInfo,
            },



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
                path: '/analysis',
                name: '用户管理',
                exact: true,
                component: Analysis,
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
                path: '/tools/swagger',
                name: 'swagger',
                exact: true,
                component: Swagger,
            },

            {
                path: '/log/vislog',
                name: '字典管理',
                exact: true,
                component: VisLog,
            },
            {
                path: '/log/oplog',
                name: '字典管理',
                exact: true,
                component: OpLog,
            },

            {
                path: '/notice/notice',
                name: '字典管理',
                exact: true,
                component: Notice,
            },
            {
                path: '/notice/noticeReceived',
                name: '字典管理',
                exact: true,
                component: NoticeReceived,
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
                path: '/monitor/onlineUser',
                name: '用户管理',
                exact: true,
                component: OnlineUser,
            },
            {
                path: '/tools/email',
                name: '用户管理',
                exact: true,
                component: EmailSend,
            },




            {
                path: '/todoTask',
                name: '用户管理',
                exact: true,
                component: ToDoTask,
            },

            {
                path: '/doneTask',
                name: '用户管理',
                exact: true,
                component: DoneTask,
            },

            {
                path: '/doneTask',
                name: '用户管理',
                exact: true,
                component: DoneTask,
            },
            {
                path: '/drafapply',
                name: '用户管理',
                exact: true,
                component: Drafapply,
            },

            {
                path: '/draft',
                name: '用户管理',
                exact: true,
                component: Draft,
            },

            {
                path: '/applyed',
                name: '用户管理',
                exact: true,
                component: Applyed,
            },
        ]
    },

];
