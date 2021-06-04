import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';

interface IUserProps {
}
const convertData = (data: Array<any>) => {
    data.forEach((item) => {
        item.key = item.id;
        if (item.children) {
            convertData(item.children);
        }
    });
};

let data = [{ "id": "1265476890651701250",  "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];
convertData(data);
let treeData: any = data;
console.log(treeData)
const User: React.FunctionComponent<IUserProps> = (props) => {
    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };


    const columns: ProColumns<any>[] = [
        {
            title: '关键字',
            dataIndex: 'index',
            hideInTable: true,
            fieldProps: {
                placeholder: "请输入姓名、账号、手机号"
            }
        },
        {
            title: '账号',
            dataIndex: 'account',
            hideInSearch: true
        },
        {
            title: '姓名',
            dataIndex: 'name',
            hideInSearch: true
        },
        {
            title: '性别',
            dataIndex: 'gender',
            hideInSearch: true,
            render: (dom, record) => {
                if (record.gender == 1) {
                    return "男"
                }
                if (record.gender == 0) {
                    return "女"
                }
                return "未知"
            }
        },
        {
            title: '手机',
            dataIndex: 'phone',
            hideInSearch: true
        },
        {
            title: '状态',
            dataIndex: 'status',
            onFilter: true,
            valueEnum: {
                0: { text: '正常' },
                1: { text: '停用' },
                2: { text: '删除' },
            },
            render: () => [
                <Popconfirm
                    title="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                >
                    <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
                </Popconfirm>

            ]
        },
        {
            title: '操作',
            dataIndex: 'index',
            width: 120,
            hideInSearch: true,
            render: (dom, record) => [
                <a key="editable">
                    编辑
              </a>,
                <Divider type="vertical" />
                ,
                <Dropdown overlay={<Menu>
                    <Menu.Item>
                        重置密码
                </Menu.Item>
                    <Menu.Item  >
                        授权角色
                </Menu.Item>
                    <Menu.Item >
                        授权数据
                </Menu.Item>
                    <Menu.Item >
                        <Popconfirm
                            title="确认删除？"
                        >
                            删除
                        </Popconfirm>

                    </Menu.Item>
                </Menu>}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        更多
               </a>
                </Dropdown>,

            ],
        },
    ];
    return <PageContainer
        title={false}
    >
        <Row>
            <Col sm={24} md={5} >
                <ProCard >
                    <Tree
                    autoExpandParent={true}
                        onSelect={onSelect}
                        defaultExpandAll={true}
                        treeData={treeData}
                    />
                   
                </ProCard>

            </Col>
            <Col sm={24} md={19} className="pl-5" >
                <ProTable
                    size="large"
                    columns={columns}
                    options={false}
                    dataSource={[{ "id": "1275735541155614721", "account": "yubaoshan", "nickName": "Await", "name": "俞宝山", "avatar": "1308792119941332993", "birthday": "1992-10-03", "gen de r": 1, "email": "await183@qq.com", "phone": "18200001102", "tel": "", "sysEmpInfo": { "jobNum": "102", "orgId": "1265476890672672769", "orgName": "华夏集团北京分公司", "extOrgPos": null, "positions": null }, "status": 0 }, { "id": "1280700700074041345", "account": "fengshuonan", "nickName": "stylefeng", "name": "冯硕楠", "avatar": "1308792417032273922", "birthday": "2020-07-01", "gender": 1, "email": null, "phone": "18200001103", "tel": null, "sysEmpInfo": { "jobNum": "110", "orgId": "1265476890672672771", "orgName": "研发部", "extOrgPos": null, "positions": null }, "status": 0 }, { "id": "1280709549107552257", "account": "xuyuxiang", "nickName": "就是那个锅", "name": "徐玉祥", "avatar": "1308792270080638977", "birthday": "2020-07-01", "gender": 1, "email": null, "phone": "18200001100", "tel": null, "sysEmpInfo": { "jobNum": "100", "orgId": "1265476890672672770", "orgName": "华夏集团成都分公司", "extOrgPos": null, "positions": null }, "status": 0 }]}
                    toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary">新建用户</Button>]}
                />
            </Col>
        </Row>

    </PageContainer>
};

export default User;
