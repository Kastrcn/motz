import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import * as React from 'react';

const OpLog: React.FunctionComponent = (props: any) => {
    const columns: ProColumns<any>[] = [
        {
            title: 'id',
            dataIndex: 'id',
            search: false,
        },

        {
            title: '名称',
            dataIndex: 'name',
            search: false,
        },
        {
            title: '请求路径',
            dataIndex: 'path',
        },
        {
            title: '参数',
            dataIndex: 'param',
            search: false,
            width: 200,
            render: (_, record) => {
                return <div dangerouslySetInnerHTML={{ __html: record.param }} />;
            },
        },
        {
            title: '状态码',
            dataIndex: 'code',
        },
        {
            title: 'ip',
            dataIndex: 'ip',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            hideInForm: true,
            search: false,
        },
        {
            title: '操作',
            valueType: 'option',
            render: (text, record, _, action) => [
                <a onClick={() => props.history.push(`/log/operation-log/${record.id}`)}>
                    详情
        </a>,
            ],
        },
    ];
    return (
        <PageContainer>
            <ProTable
                headerTitle={'日志列表'}
                search={{
                    labelWidth: 120,
                }}
                dataSource={[]}
                columns={columns}
            />
        </PageContainer>
    );
};

export default OpLog;
