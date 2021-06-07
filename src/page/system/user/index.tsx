import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Radio, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import './index.less';
import { useState } from 'react';
import CreateForm from './component/CreateForm';
import UpdateForm from './component/UpdateForm';
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



let data = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];
convertData(data);
let treeData: any = data;
console.log(treeData)
const User: React.FunctionComponent<IUserProps> = (props) => {
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    
    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [
        {
            hideInTable: true,
            hideInSearch: true,
            renderFormItem: () => <Divider orientation="left" >
                基本信息
          </Divider>,

        },
        {
            title: '关键字',
            dataIndex: 'index',
            hideInTable: true,
            hideInForm: true,
            fieldProps: {
                placeholder: "请输入姓名、账号、手机号"
            }
        },
        {
            title: '账号',
            dataIndex: 'account',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '姓名',
            dataIndex: 'name',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },

        {
            title: '密码',
            dataIndex: 'name',
            hideInTable: true,
            valueType: "password",
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '确认密码',
            dataIndex: 'name',
            valueType: "password",
            hideInTable: true,
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '昵称',
            dataIndex: 'name',
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '生日',
            dataIndex: 'date',
            valueType: "date",
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '性别',
            dataIndex: 'gender',
            hideInSearch: true,
            valueType:'radio',
            render: (dom, record) => {
                if (record.gender == 1) {
                    return "男"
                }
                if (record.gender == 0) {
                    return "女"
                }
                return "未知"
            },
        //     renderFormItem:(text, props)=> <Radio.Group  value={props.gender}>
        //     <Radio value={1}>男</Radio>
        //     <Radio value={2}>女</Radio>
        //   </Radio.Group>,
        //     formItemProps: {
        //         rules: [{ required: true }]
        //     }
        },
        {
            title: '邮箱',
            dataIndex: 'date',
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '手机',
            dataIndex: 'phone',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },

        {
            title: '电话',
            dataIndex: 'date',
            hideInTable: true,
            hideInSearch: true
        },

        {
            hideInTable: true,
            hideInSearch: true,
            renderFormItem: () => <Divider orientation="left" >
            员工信息
      </Divider>,
        },  {
            title: '机构',
            dataIndex: 'date',
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '工号',
            dataIndex: 'date',
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '职位信息',
            dataIndex: 'date',
            hideInTable: true,
            hideInSearch: true
        },
        {
            title: '附属信息',
            dataIndex: 'date',
            hideInTable: true,
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
            hideInForm: true,
            render: () => [
                <Popconfirm
                    title="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                >
                    <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
                </Popconfirm>

            ],

        },
        {
            title: '操作',
            dataIndex: 'index',
            width: 120,
            hideInForm: true,
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

            <Col sm={24} md={19} className="table" >
                <ProTable
                    size="large"
                    columns={columns}
                    options={false}
                    dataSource={[{ "id": "1275735541155614721", "account": "yubaoshan", "nickName": "Await", "name": "俞宝山", "avatar": "1308792119941332993", "birthday": "1992-10-03", "gen de r": 1, "email": "await183@qq.com", "phone": "18200001102", "tel": "", "sysEmpInfo": { "jobNum": "102", "orgId": "1265476890672672769", "orgName": "华夏集团北京分公司", "extOrgPos": null, "positions": null }, "status": 0 }, { "id": "1280700700074041345", "account": "fengshuonan", "nickName": "stylefeng", "name": "冯硕楠", "avatar": "1308792417032273922", "birthday": "2020-07-01", "gender": 1, "email": null, "phone": "18200001103", "tel": null, "sysEmpInfo": { "jobNum": "110", "orgId": "1265476890672672771", "orgName": "研发部", "extOrgPos": null, "positions": null }, "status": 0 }, { "id": "1280709549107552257", "account": "xuyuxiang", "nickName": "就是那个锅", "name": "徐玉祥", "avatar": "1308792270080638977", "birthday": "2020-07-01", "gender": 1, "email": null, "phone": "18200001100", "tel": null, "sysEmpInfo": { "jobNum": "100", "orgId": "1265476890672672770", "orgName": "华夏集团成都分公司", "extOrgPos": null, "positions": null }, "status": 0 }]}
                    toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>新建用户</Button>]}
                />
            </Col>
        </Row>
        <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
            <ProTable<any, any>
                onSubmit={async (value) => {
                    // const success = await handleAdd(value);
                    // if (success) {
                    //   handleModalVisible(false);
                    //   if (actionRef.current) {
                    //     actionRef.current.reload();
                    //   }
                    // }
                }}

                rowKey="key"
                type="form"
                columns={columns}
            />
        </CreateForm>
        <UpdateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
            <ProTable<any, any>
                onSubmit={async (value) => {
                    // const success = await handleAdd(value);
                    // if (success) {
                    //   handleModalVisible(false);
                    //   if (actionRef.current) {
                    //     actionRef.current.reload();
                    //   }
                    // }
                }}

                rowKey="key"
                type="form"
                columns={columns}
            />
        </UpdateForm>
    </PageContainer>
};

export default User;
