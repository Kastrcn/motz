import {
  Button,
  Col,
  Divider,
  Dropdown,
  Menu,
  Popconfirm,
  Row,
  Switch,
  Transfer,
  Tree,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as React from "react";
import ProCard from "@ant-design/pro-card";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import { PageContainer } from "@ant-design/pro-layout";
import CreateForm from "./component/CreateForm";
import { useState } from "react";

const mockData: any[] | undefined = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

interface INoticeProps {}

const treeData: any = [
  {
    id: "1265476890651701250",
    parentId: "0",
    title: "华夏集团",
    value: "1265476890651701250",
    weight: 100,
    children: [
      {
        id: "1265476890672672769",
        parentId: "1265476890651701250",
        title: "华夏集团北京分公司",
        value: "1265476890672672769",
        weight: 100,
        children: [
          {
            id: "1265476890672672771",
            parentId: "1265476890672672769",
            title: "研发部",
            value: "1265476890672672771",
            weight: 100,
            children: [],
            pid: "1265476890672672769",
          },
          {
            id: "1265476890672672772",
            parentId: "1265476890672672769",
            title: "企划部",
            value: "1265476890672672772",
            weight: 100,
            children: [],
            pid: "1265476890672672769",
          },
        ],
        pid: "1265476890651701250",
      },
      {
        id: "1265476890672672770",
        parentId: "1265476890651701250",
        title: "华夏集团成都分公司",
        value: "1265476890672672770",
        weight: 100,
        children: [
          {
            id: "1265476890672672773",
            parentId: "1265476890672672770",
            title: "市场部",
            value: "1265476890672672773",
            weight: 100,
            children: [
              {
                id: "1265476890672672775",
                parentId: "1265476890672672773",
                title: "市场部二部",
                value: "1265476890672672775",
                weight: 100,
                children: [],
                pid: "1265476890672672773",
              },
            ],
            pid: "1265476890672672770",
          },
          {
            id: "1265476890672672774",
            parentId: "1265476890672672770",
            title: "财务部",
            value: "1265476890672672774",
            weight: 100,
            children: [],
            pid: "1265476890672672770",
          },
        ],
        pid: "1265476890651701250",
      },
    ],
    pid: "0",
  },
];

const Notice: React.FunctionComponent<INoticeProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);

  const columns: ProColumns<any>[] = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => `${index + 1}`,
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: "标题",
      dataIndex: "title",
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "类型",
      dataIndex: "type",
      valueType: "select",
      valueEnum: {
        0: { text: "通知" },
        1: { text: "公告" },
      },
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "内容",
      dataIndex: "content",
      valueType: "textarea",
      hideInTable: true,
      hideInSearch: true,
    },
    {
      title: " 通知到的人",
      dataIndex: "content",
      hideInTable: true,
      hideInSearch: true,
      renderFormItem: () => {
        return (
          <Transfer
            dataSource={mockData}
            titles={["Source", "Target"]}
            render={(item) => item.title}
          />
        );
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      hideInForm: true,
      valueEnum: {
        0: { text: "未发布" },
        1: { text: "发布" },
      },
    },
    {
      title: "操作",
      dataIndex: "index",
      width: 120,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => [
        <a key="editable">查看</a>,
        <Divider type="vertical" />,
        <Popconfirm title="确认删除？">
          <a key="editable">撤回</a>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        size="large"
        columns={columns}
        options={false}
        dataSource={[
          {
            createTime: "2020-09-13 09:54:54.000",
            createUser: "1280700700074041345",
            updateTime: null,
            updateUser: null,
            id: "1304961721068220417",
            title: "北京的秋天",
            content:
              '<p><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1599972071688&amp;di=9d692807717018e9f36dc209b8f2a290&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3178869736%2C1430240761%26fm%3D214%26gp%3D0.jpg">&nbsp;&nbsp;<br></p>',
            type: 1,
            publicUserId: "1280700700074041345",
            publicUserName: "冯硕楠",
            publicOrgId: "1265476890672672771",
            publicOrgName: "研发部",
            publicTime: "2020-09-13 09:54:54.000",
            cancelTime: null,
            status: 1,
          },
          {
            createTime: "2020-09-13 10:07:47.000",
            createUser: "1265476890672672808",
            updateTime: null,
            updateUser: null,
            id: "1304964964817104898",
            title: "北京的秋天",
            content:
              '<div style="text-align: center;"><img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1599972936240&amp;di=0c65610a70a7f8de26e84f51da77604f&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3178869736%2C1430240761%26fm%3D214%26gp%3D0.jpg">&nbsp;&nbsp;<br></div><p></p>',
            type: 1,
            publicUserId: "1265476890672672808",
            publicUserName: "超级管理员",
            publicOrgId: null,
            publicOrgName: null,
            publicTime: "2020-09-13 10:07:47.000",
            cancelTime: null,
            status: 1,
          },
        ]}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => handleModalVisible(true)}
          >
            新建职位
          </Button>,
        ]}
      />
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
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
          form={{
            layout: "horizontal",
            labelCol: { span: 5 },
            wrapperCol: { span: 15 },
            submitter: { render: false },
          }}
          rowKey="key"
          type="form"
          columns={columns}
        />
      </CreateForm>
    </PageContainer>
  );
};

export default Notice;
