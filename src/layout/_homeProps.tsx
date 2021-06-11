import React from 'react';
import { ClusterOutlined, LaptopOutlined } from '@ant-design/icons';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/',
                name: '业务流程',
                icon: <ClusterOutlined />,
                redirect: "/analysis",
                component: './Welcome',
                routes: [
                    {
                        path: '/workplace',
                        name: '定义管理',
                        component: './Welcome',
                    },
                    {
                        path: '/analysis',
                        name: '分类管理',
                        component: './Welcome',
                    },
                    {
                        path: '/analysis',
                        name: '表单管理',
                        component: './Welcome',
                    },
                    {
                        path: '/analysis',
                        name: '脚本管理',
                        component: './Welcome',
                    },
                    {
                        path: '/analysis',
                        name: '入口管理',
                        component: './Welcome',
                    },
                    {
                        path: '/analysis',
                        name: '实例管理',
                        component: './Welcome',
                    },
                ]
            }, {
                path: '/sys_flw_office',
                name: '在线办公',
                icon: <LaptopOutlined />,
                routes: [
                    {
                        path: '/task',
                        name: '我的任务',
                        routes:[
                            {
                                path: '/todoTask',
                                name: '代办任务',
                                component: './system/user',
                            },
                            {
                                path: '/doneTask',
                                name: '已办任务',
                                component: './Welcome',
                            },
                        ]
                    },
                    {
                        path: '/apply',
                        name: '我的申请',
                        routes:[
                            {
                                path: '/drafapply',
                                name: '起草申请',
                            },
                            {
                                path: '/draft',
                                name: '申请草稿',
                            },
                            {
                                path: '/applyed',
                                name: '已发申请',
                            },
                        ]
                    },

                ]
            }
        ],
    },
    location: {
        pathname: '/',
    },
};



