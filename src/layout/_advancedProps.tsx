import React from 'react';
import { StrikethroughOutlined, SlidersOutlined, SwitcherOutlined, PicLeftOutlined, DeploymentUnitOutlined, ReadOutlined, SafetyCertificateOutlined, EuroOutlined, DashboardOutlined } from '@ant-design/icons';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/',
                name: '支付管理',
                icon: <StrikethroughOutlined />,
                component: './Welcome',
                routes: [
                    {
                        path: '/pay/index',
                        name: '支付体验',
                        component: './Welcome',
                    },
                    {
                        path: '/alipay/index',
                        name: '支付订单',
                        component: './Welcome',
                    },
                ]
            }, {
                path: '/formdesign',
                name: '表单设计',
                icon: <PicLeftOutlined />,
                component: './Welcome',
            }, {
                path: '/databaseInfo',
                name: '多数据源',
                icon: <SlidersOutlined />,
                routes: [
                    {
                        path: '/auth/app',
                        name: '数据源管理',
                        component: './Welcome',
                    },

                ]
            }, {
                path: '/tenantInfo',
                name: 'SaaS租户',
                icon: <SwitcherOutlined />,
                routes: [
                    {
                        path: '/tools/config',
                        name: '租户管理',
                        component: './Welcome',
                    },

                ]
            }
        ],
    },
    location: {
        pathname: '/',
    },
};



