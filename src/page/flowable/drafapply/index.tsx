import { Button, Col, Divider, Dropdown, FormInstance, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { ThunderboltOutlined,ProfileOutlined,BlockOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useRef, useState } from 'react';
import './index.less'
interface IDrafapplyProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const Drafapply: React.FunctionComponent<IDrafapplyProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const createFormRef = useRef<FormInstance>()
  const updateFormRef = useRef<FormInstance>()
  const [row, setRow] = useState({})











  const columns: ProColumns<any>[] = [
    {
      title: '流程名称',
      dataIndex: 'name',
      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '任务名称',
      dataIndex: 'name',
      hideInTable: true,
      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '流程分类',
      dataIndex: 'name',
      valueType: 'select',
      hideInTable: true,
      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '发起人',
      dataIndex: 'code',
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '发起时间',
      dataIndex: 'sort',
      hideInSearch: true
    },
    {
      title: '接收时间',
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true
    },
    {
      title: '当前节点',
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true
    },

    {
      title: '当前操作人',
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true
    },

    {
      title: '优先级',
      dataIndex: 'remark',
      valueType: 'textarea',
    },

    {
      title: '任务期限',
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true
    },
    {
      title: '创建时间',
      dataIndex: 'remark',
      valueType: 'dateTimeRange',
      hideInTable: true,
    },

    {
      title: '操作',
      dataIndex: 'index',
      width: 120,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => [
        <a key="editable" onClick={() => {
          setRow(record);
          handleUpdateModalVisible(true);
        }}>
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
    <ProCard>
      <Divider orientation="left" >
        差旅类
          </Divider>
      <Row>
        <Col sm={24} md={6} >
          <div className='wrap'>
            <div className='icon'>  <ThunderboltOutlined style={{ fontSize: '40px' }} /></div>
            <span>出差申请</span>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" >
        考勤类
          </Divider>
          <Row>
        <Col sm={24} md={6} >
          <div className='wrap'>
            <div className='icon'>  <ProfileOutlined style={{ fontSize: '40px' }} /></div>
            <span>出差申请</span>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" >
        行政类
          </Divider>
          <Row>
        <Col sm={24} md={6} >
          <div className='wrap'>
            <div className='icon'>  <BlockOutlined style={{ fontSize: '40px' }} /></div>
            <span>出差申请</span>
          </div>
        </Col>
      </Row>
    </ProCard>
  </PageContainer>
};

export default Drafapply;
