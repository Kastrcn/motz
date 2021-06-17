import { PageContainer } from "@ant-design/pro-layout";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import { PlusOutlined } from "@ant-design/icons";

import { Button, Divider, FormInstance, message, Popconfirm } from "antd";
import * as React from "react";
import { useRef, useState } from "react";
import CreateForm from "./component/CreateForm";
import UpdateForm from "./component/UpdateForm";
import IconTab from "./component/IconTab";

interface IMenuProps {}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [iconModalVisible, handleIconModalVisible] = useState<boolean>(false);

  const createFormRef = useRef<FormInstance>();
  const updateFormRef = useRef<FormInstance>();
  const [row, setRow] = useState({});
  const columns: ProColumns<any>[] = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => `${index + 1}`,
      hideInSearch: true,

      hideInForm: true,
    },
    {
      title: "菜单名称",
      dataIndex: "title",
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "菜单类型",
      dataIndex: "type",
      valueType: "select",
      hideInSearch: true,
      valueEnum: {
        0: { text: "通知" },
        1: { text: "公告" },
      },
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "图标",
      dataIndex: "content",
      valueType: "textarea",
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: "组件",
      dataIndex: "status",
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: { text: "未发布" },
        1: { text: "发布" },
      },
    },
    {
      title: "路由地址",
      dataIndex: "status",
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: { text: "未发布" },
        1: { text: "发布" },
      },
    },
    {
      title: "排序",
      dataIndex: "status",
      hideInForm: true,
      hideInSearch: true,
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
        search={false}
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
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => handleIconModalVisible(true)}
          >
            菜单
          </Button>,
        ]}
      />
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
        onOk={() => createFormRef.current?.submit()}
      >
        {/* <ProTable<any, any>

        onSubmit={async (value) => {
          console.log(value)
          // const { data } = await add(value);
          // if (data.success) {
          //     message.success("添加成功")
          //     handleModalVisible(false);
          //     // if (actionRef.current) {
          //     //     actionRef.current.reload();
          //     // }
          // } else {
          //     message.error("添加成功")
          // }
        }}

        formRef={createFormRef}
        form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter: { render: false } }}
        rowKey="key"
        type="form"
        columns={columns}
      /> */}
      </CreateForm>
      <UpdateForm
        onCancel={() => handleUpdateModalVisible(false)}
        modalVisible={updateModalVisible}
        onOk={() => updateFormRef.current?.submit()}
      >
        <ProTable<any, any>
          onSubmit={async (value) => {
            console.log(value);
          }}
          formRef={createFormRef}
          form={{
            layout: "horizontal",
            labelCol: { span: 5 },
            wrapperCol: { span: 15 },
            submitter: { render: false },
            initialValues: row,
          }}
          rowKey="key"
          type="form"
          columns={columns}
        />
      </UpdateForm>
      <IconTab
        onCancel={() => handleIconModalVisible(false)}
        modalVisible={iconModalVisible}
      />
    </PageContainer>
  );
};
export default Menu;
