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
                path: '/sys',
                name: '在线办公',
                icon: <LaptopOutlined />,
                component: './Welcome',
                routes: [
                    {
                        path: '/sys/mgr_user',
                        name: '我的任务',
                        component: './system/user',
                        routes:[
                            {
                                path: '/sys/mgr_user',
                                name: '代办任务',
                                component: './system/user',
                            },
                            {
                                path: '/sys/org',
                                name: '已办任务',
                                component: './Welcome',
                            },
                        ]
                    },
                    {
                        path: '/sys/org',
                        name: '我的申请',
                        component: './Welcome',
                        routes:[
                            {
                                path: '/sys/mgr_user',
                                name: '起草申请',
                                component: './system/user',
                            },
                            {
                                path: '/sys/org',
                                name: '申请草稿',
                                component: './Welcome',
                            },
                            {
                                path: '/sys/org',
                                name: '已发申请',
                                component: './Welcome',
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



