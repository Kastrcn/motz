import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useState } from 'react';

interface IOnlineUserProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const OnlineUser: React.FunctionComponent<IOnlineUserProps> = (props) => {

    
    const columns: ProColumns<any>[] = [
        {
            title: '账号',
            dataIndex: 'account',
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '最后登录IP',
            dataIndex: 'lastLoginIp',
        },
        
        {
            title: '最后登录时间',
            dataIndex: 'lastLoginTime',
            valueType:'textarea',
        },
        {
            title: '最后登录地址',
            dataIndex: 'lastLoginAddress',
            valueType:'textarea',
        },
        {
            title: '最后登录浏览器',
            dataIndex: 'lastLoginBrowser',
            valueType:'textarea',
        },
        {
            title: '最后登录所用系统',
            dataIndex: 'lastLoginOs',
            valueType:'textarea',
        },
        {
            title: '操作',
            dataIndex: 'index',
            width: 120,
            hideInSearch: true,
            hideInForm:true,
            render: (dom, record) => [
               
                 <Divider type="vertical" />,
                 <Popconfirm
                 title="确认删除？"
             >
                <a key="editable">
                强制下线
              </a>
             </Popconfirm>

            ],
        },
    ];
    return <PageContainer
        title={false}
    >
        <ProTable
                    size="large"
                    columns={columns}
                    options={false}
                    search={false}
                    dataSource={[{"sessionId":"c3bbfcd5-9c2f-4db1-9f27-228ec7c1a926","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"1.204.116.244","lastLoginTime":"2021-06-07 17:52:17","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"3ac42c45-9baf-4226-942f-9f2c204dd918","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"119.123.217.68","lastLoginTime":"2021-06-07 17:39:37","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"216008a1-73f5-41e5-84ad-86e1289660d2","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"116.246.1.244","lastLoginTime":"2021-06-07 17:24:45","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"c0ac82aa-de28-4df5-b0a1-f6f35b7c6567","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"127.0.0.1","lastLoginTime":"2021-06-07 17:12:28","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"9f658618-485e-442d-ba05-efbdb0e7042c","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"59.50.110.98","lastLoginTime":"2021-06-07 17:10:27","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"f9ca50eb-17cb-419a-a3c7-b1be08d373b9","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"127.0.0.1","lastLoginTime":"2021-06-07 17:08:32","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"471c4815-032f-46aa-8212-bbbd0a65c3cd","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"127.0.0.1","lastLoginTime":"2021-06-07 17:08:30","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"ef1944ce-c2ca-4bb8-829e-32d3e3465c2e","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"58.16.176.139","lastLoginTime":"2021-06-07 17:06:53","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"7ffbc4a6-9cba-45dc-8443-ce15c8943565","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"127.0.0.1","lastLoginTime":"2021-06-07 17:00:43","lastLoginAddress":"-","lastLoginBrowser":"MSEdge","lastLoginOs":"Windows 10 or Windows Server 2016"},{"sessionId":"7fe0b2b9-a439-42c0-8b73-c049eea3f33a","account":"superAdmin","nickName":"超级管理员","lastLoginIp":"117.30.73.33","lastLoginTime":"2021-06-07 16:57:53","lastLoginAddress":"-","lastLoginBrowser":"Chrome","lastLoginOs":"Windows 10 or Windows Server 2016"}]}
                    headerTitle={<></>}
                />
              
    </PageContainer>
};

export default OnlineUser;
