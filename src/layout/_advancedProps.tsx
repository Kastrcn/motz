import React from 'react';
import { StrikethroughOutlined, SlidersOutlined, SwitcherOutlined, PicLeftOutlined, DeploymentUnitOutlined, ReadOutlined, SafetyCertificateOutlined, EuroOutlined, DashboardOutlined } from '@ant-design/icons';

export default {
    route: {
        path: '/pay_manage',
        routes: [
            {
                path: '/pay_manage',
                name: '支付管理',
                icon: <StrikethroughOutlined />,
                component: './Welcome',
                routes: [
                    {
                        path: '/pay/alipay/index',
                        name: '支付体验',
                        component: './Welcome',
                    },
                    {
                        path: '/pay/index',
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
                path: '/database',
                name: '多数据源',
                icon: <SlidersOutlined />,
                routes: [
                    {
                        path: '/databaseInfo',
                        name: '数据源管理',
                        component: './Welcome',
                    },

                ]
            }, {
                path: '/tenant',
                name: 'SaaS租户',
                icon: <SwitcherOutlined />,
                routes: [
                    {
                        path: '/tenantInfo',
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



