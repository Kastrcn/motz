import {
  Button,
  Col,
  Divider,
  Dropdown,
  FormInstance,
  Menu,
  message,
  Popconfirm,
  Row,
  Switch,
  Tree,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as React from "react";
import ProCard from "@ant-design/pro-card";
import ProTable, { ActionType, ProColumns } from "@ant-design/pro-table";
import { PageContainer } from "@ant-design/pro-layout";
import CreateForm from "./component/CreateForm";
import { useRef, useState } from "react";
import UpdateForm from "./component/UpdateForm";
import { add, getPageList, update } from "./api";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const createFormRef = useRef<FormInstance>();
  const updateFormRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
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
      title: "应用名称",
      dataIndex: "name",
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "唯一编码",
      dataIndex: "code",
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "是否默认",
      dataIndex: "sort",
      hideInForm: true,
      hideInSearch: true,
    },
    {
      title: "状态",
      dataIndex: "remark",
      valueType: "textarea",
      hideInForm: true,
      hideInSearch: true,
    },

    {
      title: "操作",
      dataIndex: "index",
      width: 220,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => [
        <a
          key="editable"
          onClick={() => {
            setRow(record);
            handleUpdateModalVisible(true);
          }}
        >
          编辑
        </a>,
        <Divider type="vertical" />,
        <Popconfirm title="确认删除？">
          <a key="editable">删除</a>
        </Popconfirm>,
        <Divider type="vertical" />,
        <a
          key="editable"
          onClick={() => {
            setRow(record);
            handleUpdateModalVisible(true);
          }}
        >
          设为默认
        </a>,
      ],
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        size="large"
        columns={columns}
        options={false}
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          params,
          sort,
          filter
        ) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const msg = await getPageList(params);
          return {
            data: msg.data.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: msg.data.success,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: msg.data.total,
          };
        }}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => handleModalVisible(true)}
          >
            新建应用
          </Button>,
        ]}
      />
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
        onOk={() => createFormRef.current?.submit()}
      >
        <ProTable<any, any>
          onSubmit={async (value) => {
            console.log(value);
            const { data } = await add(value);
            if (data.success) {
              message.success("添加成功");
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            } else {
              message.error("添加成功");
            }
          }}
          formRef={createFormRef}
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
      <UpdateForm
        onCancel={() => handleUpdateModalVisible(false)}
        modalVisible={updateModalVisible}
        onOk={() => updateFormRef.current?.submit()}
      >
        <ProTable<any, any>
          onSubmit={async (value) => {
            console.log(value);
            const { data } = await update({
              ...value,
              ...{ id: row.id },
            });

            if (data.success) {
              message.success("修改成功");
              handleUpdateModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            } else {
              message.error("修改失败");
            }
          }}
          formRef={updateFormRef}
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
    </PageContainer>
  );
};

export default App;
