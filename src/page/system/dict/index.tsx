import {
  Button,
  Divider,
  Dropdown,
  FormInstance,
  Menu,
  message,
  Popconfirm,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as React from "react";
import ProTable, { ActionType, ProColumns } from "@ant-design/pro-table";
import { PageContainer } from "@ant-design/pro-layout";
import { useRef, useState } from "react";
import CreateForm from "./component/CreateForm";
import DictManageForm from "./component/DictManageForm";
import UpdateForm from "./component/DictManageUpdateForm";
import { DownOutlined } from "@ant-design/icons";
import { add, getPageList, del, update } from "./api";

interface IDictProps {}

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

const Dict: React.FunctionComponent<IDictProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);

  const [dictManageVisible, handleDictManageVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();

  const [row, setRow] = useState<any>({});
  const createFormRef = useRef<FormInstance>();
  const updateFormRef = useRef<FormInstance>();

  const columns: ProColumns<any>[] = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => `${index + 1}`,
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: "类型名称",
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
      title: "排序",
      dataIndex: "sort",
      valueType: "digit",
      initialValue: 100,
      hideInSearch: true,
    },
    {
      title: "备注",
      valueType: "textarea",
      dataIndex: "remark",
      hideInSearch: true,
    },
    {
      title: "状态",
      dataIndex: "status",
      hideInForm: true,
      valueType: "select",
      valueEnum: {
        1: "启用",
        0: "停用",
      },
    },

    {
      title: "操作",
      dataIndex: "index",
      width: 200,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => [
        <a
          key="editable"
          onClick={() => {
            handleDictManageVisible(true);
            setRow(record);
          }}
        >
          字典
        </a>,
        <Divider type="vertical" />,
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <span
                  key="editable"
                  onClick={() => {
                    handleUpdateModalVisible(true);
                    setRow(record);
                    console.log(record);
                  }}
                >
                  修改
                </span>
              </Menu.Item>
              <Menu.Item>
                <Popconfirm
                  title="确认删除？"
                  onConfirm={() => deleteById(record)}
                >
                  <span key="delable">删除</span>
                </Popconfirm>
              </Menu.Item>
            </Menu>
          }
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            更多
            <DownOutlined />
          </a>
        </Dropdown>,
      ],
    },
  ];

  const deleteById = async (record: any) => {
    const { data } = await del({ id: record.id });
    if (data.success) {
      message.success("删除成功");
      if (actionRef.current) {
        actionRef.current.reload();
      }
    } else {
      message.error("删除成功");
    }
  };
  return (
    <PageContainer
      title={false}
      // breadcrumbRender={(props: any) => {
      //     return <Breadcrumb>
      //         <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
      //         {props.breadcrumb.routes.map((item: any) => <Breadcrumb.Item>
      //             <Link to={item.path}>{item.breadcrumbName}</Link>
      //         </Breadcrumb.Item>)}
      //     </Breadcrumb>
      // }}
    >
      <ProTable
        size="large"
        columns={columns}
        options={false}
        actionRef={actionRef}
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
            onClick={() => handleModalVisible(true)}
            type="primary"
          >
            新增类型
          </Button>,
        ]}
      />

      <DictManageForm
        onCancel={() => handleDictManageVisible(false)}
        id={row.id}
        modalVisible={dictManageVisible}
      >
        {/* <ProTable<any, any>
                onSubmit={async (value) => {
                    // const success = await handleAdd(value);
                    // if (success) {
                    //   handleModalVisible(false);
                    //   if (actionRef.current) {
                    //     actionRef.current.reload();
                    //   }
                    // }
                }}
                search={{ collapseRender: false }}
                form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, }}
                rowKey="key"

                options={false}
                toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">22新建职位</Button>]}
                columns={columns}
            /> */}
      </DictManageForm>

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

export default Dict;
