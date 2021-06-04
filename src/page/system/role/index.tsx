import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';

interface IRoleProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const Role: React.FunctionComponent<IRoleProps> = (props) => {
    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [
        {
            title: '角色名',
            dataIndex: 'name',
        },
        {
            title: '唯一编码',
            dataIndex: 'code',
        },
        {
            title: '排序',
            dataIndex: 'sort',
            hideInSearch: true
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
        <ProTable
                    size="large"
                    columns={columns}
                    options={false}
                    dataSource={[{"createTime":"2020-03-26 19:28:54.000","createRole":"1265476890672672808","updateTime":"2020-06-02 21:01:04.000","updateRole":"1265476890672672808","id":"1265476890672672787","name":"总经理","code":"zjl","sort":100,"remark":"总经理职位","status":0},{"createTime":"2020-03-26 19:29:57.000","createRole":"1265476890672672808","updateTime":null,"updateRole":null,"id":"1265476890672672788","name":"副总经理","code":"fzjl","sort":100,"remark":"副总经理职位","status":0},{"createTime":"2020-03-26 19:31:49.000","createRole":"1265476890672672808","updateTime":null,"updateRole":null,"id":"1265476890672672789","name":"部门经理","code":"bmjl","sort":100,"remark":"部门经理职位","status":0},{"createTime":"2020-05-27 11:32:00.000","createRole":"1265476890672672808","updateTime":"2020-06-01 10:51:35.000","updateRole":"1265476890672672808","id":"1265476890672672790","name":"工作人员","code":"gzry","sort":100,"remark":"工作人员职位","status":0}]}
                    toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary">新建职位</Button>]}
                />
    </PageContainer>
};

export default Role;
