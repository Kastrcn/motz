import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';



export type TableListItem = {
    createTime: string;
    createUser: string;
    updateTime: string;
    updateUser: string;
    id: string;
    timerName: string;
    actionClass: string;
    cron: string;
    jobStatus: number;
    remark: string;
};
const tableListDataSource: TableListItem[] = [{"createTime":"2020-07-30 16:56:20.000","createUser":"1265476890672672808","updateTime":"2020-07-30 16:58:52.000","updateUser":"1265476890672672808","id":"1288760324837851137","timerName":"定时同步缓存常量","actionClass":"cn.stylefeng.guns.sys.modular.timer.tasks.RefreshConstantsTaskRunner","cron":"0 0/1 * * * ?","jobStatus":1,"remark":"定时同步sys_config表的数据到缓存常量中"},{"createTime":"2020-09-13 10:34:37.000","createUser":"1265476890672672808","updateTime":"2020-09-23 20:37:48.000","updateUser":"1265476890672672808","id":"1304971718170832898","timerName":"定时打印一句话","actionClass":"cn.stylefeng.guns.sys.modular.timer.tasks.SystemOutTaskRunner","cron":"0 0 * * * ? *","jobStatus":2,"remark":"定时打印一句话"}];



const columns: ProColumns<TableListItem>[] = [
    {
        title: 'id',
        dataIndex: 'id',
        hideInSearch: true
    },
    {
        title: '任务名称',
        dataIndex: 'timerName',
    },
    {
        title: '任务class类名',
        dataIndex: 'actionClass',
        hideInSearch: true
    },
    {
        title: '定时任务表达式',
        dataIndex: 'cron',
        hideInSearch: true
    },

    {
        title: '备注',
        dataIndex: 'remark',
        ellipsis: true,
        copyable: true,
        hideInSearch: true
    },
    {
        title: '状态',
        dataIndex: 'jobStatus',
        onFilter: true,
        valueEnum: {
            1: { text: '运行', status:'Processing' },
            2: { text: '停止', status: 'Default' },
        },
    },
    {
        title: '操作',
        key: 'option',
        valueType: 'option',
        render: () => [
            <a onClick={() => { }}>编辑</a>,
            <a onClick={() => { }}>删除</a>,

        ],

    },


];

const menu = (
    <Menu>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);


const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export interface ITimersProps {
}



export function Timers(props: ITimersProps) {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <PageContainer
        title={false}
    >
        <ProTable<TableListItem>
            columns={columns}
            request={(params, sorter, filter) => {
                // 表单搜索项会从 params 传入，传递给后端接口。
                console.log(params, sorter, filter);
                return Promise.resolve({
                    data: tableListDataSource,
                    success: true,
                });
            }}
            rowKey="key"
            search={{
                layout: 'horizontal',
                defaultCollapsed: false,
            }}
            options={false}
            dateFormatter="string"
            toolBarRender={() => [<Button type="primary">新增定时任务</Button>]}
        />
        </PageContainer>

    );
}
