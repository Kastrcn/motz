import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import './index.less'
import CreateForm from './component/CreateForm';
import { useState } from 'react';
interface IOrgProps {
}


const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];


const Org: React.FunctionComponent<IOrgProps> = (props) => {
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [

        {
            title: '机构名称',
            dataIndex: 'name',

            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '唯一编码',
            dataIndex: 'code',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '上级机构',
            dataIndex: 'code',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '排序',
            dataIndex: 'sort',
            hideInSearch: true
        },
        {
            title: '备注',
            dataIndex: 'remark',
            valueType: 'textarea',
            hideInSearch: true
        },

        {
            title: '操作',
            dataIndex: 'index',
            width: 120,
            hideInSearch: true,
            hideInForm: true,
            render: (dom, record) => [
                <a key="editable">
                    编辑
              </a>,
                <Divider type="vertical" />,
                <Popconfirm
                    title="确认删除？"
                >
                    <a key="editable">
                        删除
              </a>
                </Popconfirm>

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
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={onSelect}
                        treeData={treeData}
                    />
                </ProCard>

            </Col>
            <Col sm={24} md={19} className="table" >
                <ProTable
                    size="large"
                    columns={columns}
                    options={false}
                    dataSource={[{ "createTime": "2020-03-26 16:55:42.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672769", "pid": "1265476890651701250", "pids": "[0],[1265476890651701250],", "name": "华夏集团北京分公司", "code": "hxjt_bj", "sort": 100, "remark": "华夏集团北京分公司", "status": 0 }, { "createTime": "2020-03-26 16:56:02.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672770", "pid": "1265476890651701250", "pids": "[0],[1265476890651701250],", "name": "华夏集团成都分公司", "code": "hxjt_cd", "sort": 100, "remark": "华夏集团成都分公司", "status": 0 }, { "createTime": "2020-03-26 16:50:53.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890651701250", "pid": "0", "pids": "[0],", "name": "华夏集团", "code": "hxjt", "sort": 100, "remark": "华夏集团总公司", "status": 0 }, { "createTime": "2020-03-26 16:56:36.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672771", "pid": "1265476890672672769", "pids": "[0],[1265476890651701250],[1265476890672672769],", "name": "研发部", "code": "hxjt_bj_yfb", "sort": 100, "remark": "华夏集团北京分公司研发部", "status": 0 }, { "createTime": "2020-03-26 16:57:06.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672772", "pid": "1265476890672672769", "pids": "[0],[1265476890651701250],[1265476890672672769],", "name": "企划部", "code": "hxjt_bj_qhb", "sort": 100, "remark": "华夏集团北京分公司企划部", "status": 0 }, { "createTime": "2020-03-26 16:57:35.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672773", "pid": "1265476890672672770", "pids": "[0],[1265476890651701250],[1265476890672672770],", "name": "市场部", "code": "hxjt_cd_scb", "sort": 100, "remark": "华夏集团成都分公司市场部", "status": 0 }, { "createTime": "2020-03-26 16:58:01.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672774", "pid": "1265476890672672770", "pids": "[0],[1265476890651701250],[1265476890672672770],", "name": "财务部", "code": "hxjt_cd_cwb", "sort": 100, "remark": "华夏集团成都分公司财务部", "status": 0 }, { "createTime": "2020-04-06 15:36:50.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1265476890672672775", "pid": "1265476890672672773", "pids": "[0],[1265476890651701250],[1265476890672672770],[1265476890672672773],", "name": "市场部二部", "code": "hxjt_cd_scb_2b", "sort": 100, "remark": "华夏集团成都分公司市场部二部", "status": 0 }]}
                    toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>新建机构</Button>]}
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
                
                form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, }}
                rowKey="key"
                type="form"
                columns={columns}
            />
        </CreateForm>

    </PageContainer>
};

export default Org;
