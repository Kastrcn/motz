import { Breadcrumb, Button, Col, Divider, Dropdown, Menu, PageHeaderProps, Popconfirm, Row, Switch, Tag, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IDictProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const Dict: React.FunctionComponent<IDictProps> = (props) => {

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [
        {
            title: '类型名称',
            dataIndex: 'name',
        },
        {
            title: '唯一编码',
            dataIndex: 'code',
        },
        {
            title: '排序',
            dataIndex: 'sort',
        },
        {
            title: '备注',
            dataIndex: 'remark',
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (dom, record) => {
                if (record.status === 0) {
                    return "正常"
                } if (record.status === 1) {
                    return "错误"
                }
                return "未知"
            }
        },

        {
            title: '操作',
            dataIndex: 'index',
            width: 200,
            hideInSearch: true,
            render: (dom, record) => [
                <a key="editable">
                    字典
              </a>,
                <Divider type="vertical" />,
                <a key="editable">
                    更多
              </a>

            ],
        },


    ];
    return <PageContainer
        title={false}
        breadcrumbRender={(props: any) => {
            return <Breadcrumb>
                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                {props.breadcrumb.routes.map((item: any) => <Breadcrumb.Item>
                    <Link to={item.path}>{item.breadcrumbName}</Link>
                </Breadcrumb.Item>)}
            </Breadcrumb>
        }}
    >
        <ProTable
            size="large"
            columns={columns}
            options={false}
            dataSource={[{ "createTime": "2020-08-06 23:19:24.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1291393441594408961", "name": "是否结束", "code": "ended_status", "sort": 100, "remark": "是否结束", "status": 0 }, { "createTime": "2020-07-03 12:41:49.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1278911800547147777", "name": "通知公告类型", "code": "notice_type", "sort": 100, "remark": "通知公告类型", "status": 0 }, { "createTime": "2020-05-27 10:28:45.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265469962873610241", "name": "事件类型", "code": "event_type", "sort": 100, "remark": "事件类型", "status": 0 }, { "createTime": "2020-05-27 10:27:43.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265469702042427393", "name": "表单类型", "code": "form_type", "sort": 100, "remark": "表单类型", "status": 0 }, { "createTime": "2020-05-27 10:21:04.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265468028632571905", "name": "数据范围类型", "code": "data_scope_type", "sort": 100, "remark": "数据范围类型", "status": 0 }, { "createTime": "2020-07-02 16:30:27.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1278606951432855553", "name": "运行状态", "code": "run_status", "sort": 100, "remark": "定时任务运行状态", "status": 0 }, { "createTime": "2020-05-27 10:13:36.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265466149622128641", "name": "发送类型", "code": "send_type", "sort": 100, "remark": "发送类型", "status": 0 }, { "createTime": "2020-05-27 10:16:00.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265466752209395713", "name": "打开方式", "code": "open_type", "sort": 100, "remark": "打开方式", "status": 0 }, { "createTime": "2020-05-27 10:25:43.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265469198583341057", "name": "脚本类型", "code": "script_type", "sort": 100, "remark": "脚本类型", "status": 0 }, { "createTime": "2020-06-30 09:22:42.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1277774529430654977", "name": "文件存储位置", "code": "file_storage_location", "sort": 100, "remark": "文件存储位置", "status": 0 }]}
            headerTitle={<Button key="button" icon={<PlusOutlined />} type="primary">新增类型</Button>}

        />
    </PageContainer>
};

export default Dict;
