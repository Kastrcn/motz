import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button, FormInstance, Menu, message, Popconfirm } from "antd";
import type { ActionType, ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { PageContainer } from "@ant-design/pro-layout";
import { PlusOutlined } from "@ant-design/icons";

import CreateForm from "./component/CreateForm";
import UpdateForm from "./component/UpdateForm";

export type TableListItem = {
  createTime: string;
  createUser: string;
  updateTime: string;
  updateUser: string;
  id: string;
  timerName: string;
  actionClass: string;
  cron: string;
  jobStatus: number;
  remark: string;
};

export interface ITimersProps {}

export function Timers(props: ITimersProps) {
  const tableListDataSource: TableListItem[] = [
    {
      createTime: "2020-07-30 16:56:20.000",
      createUser: "1265476890672672808",
      updateTime: "2020-07-30 16:58:52.000",
      updateUser: "1265476890672672808",
      id: "1288760324837851137",
      timerName: "定时同步缓存常量",
      actionClass:
        "cn.stylefeng.guns.sys.modular.timer.tasks.RefreshConstantsTaskRunner",
      cron: "0 0/1 * * * ?",
      jobStatus: 1,
      remark: "定时同步sys_config表的数据到缓存常量中",
    },
    {
      createTime: "2020-09-13 10:34:37.000",
      createUser: "1265476890672672808",
      updateTime: "2020-09-23 20:37:48.000",
      updateUser: "1265476890672672808",
      id: "1304971718170832898",
      timerName: "定时打印一句话",
      actionClass:
        "cn.stylefeng.guns.sys.modular.timer.tasks.SystemOutTaskRunner",
      cron: "0 0 * * * ? *",
      jobStatus: 2,
      remark: "定时打印一句话",
    },
  ];
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [row, setRow] = useState<TableListItem>();
  const createFormRef = useRef<FormInstance>();
  const updateFormRef = useRef<FormInstance>();

  const [cronClass, setCronClass] = useState({});

  const columns: ProColumns<TableListItem>[] = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => `${index + 1}`,
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: "id",
      dataIndex: "id",
      hideInSearch: true,
      hideInForm: true,
      hideInTable: true,
    },
    {
      title: "任务名称",
      dataIndex: "timerName",
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "任务class类名",
      dataIndex: "actionClass",
      valueType: "select",
      valueEnum: cronClass,
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: "定时任务表达式",
      dataIndex: "cron",
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }],
      },
    },

    {
      title: "备注",
      dataIndex: "remark",
      valueType: "textarea",
      ellipsis: true,
      copyable: true,
      hideInSearch: true,
    },
    {
      title: "状态",
      dataIndex: "jobStatus",
      onFilter: true,
      hideInForm: true,
      valueEnum: {
        1: { text: "运行", status: "Processing" },
        2: { text: "停止", status: "Default" },
      },
    },
    {
      title: "操作",
      key: "option",
      valueType: "option",
      render: (dom, entity) => [
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setRow(entity);
          }}
        >
          编辑
        </a>,
        <Popconfirm title="确认删除？" onConfirm={() => console.log(entity)}>
          <a key="editable">删除 </a>
        </Popconfirm>,
      ],
    },
  ];

  useEffect(() => {
    const cronList = [
      "cn.stylefeng.guns.sys.modular.timer.tasks.RefreshConstantsTaskRunner",
      "cn.stylefeng.guns.sys.modular.timer.tasks.SystemOutTaskRunner",
    ];
    let cronObj: any = {};
    for (let i = 0; i < cronList.length; i++) {
      cronObj[i] = cronList[i];
    }
    setCronClass(cronObj);
  }, []);
  return (
    <PageContainer title={false}>
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        search={{
          layout: "horizontal",
          defaultCollapsed: false,
        }}
        options={false}
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleModalVisible(true)}
          >
            新增定时任务
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
            // const success = await handleAdd(value);
            // if (success) {
            //   handleModalVisible(false);
            //   if (actionRef.current) {
            //     actionRef.current.reload();
            //   }
            // }
          }}
          formRef={createFormRef}
          form={{
            formRef: createFormRef,
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
            // const success = await handleAdd(value);
            // if (success) {
            //   handleModalVisible(false);
            //   if (actionRef.current) {
            //     actionRef.current.reload();
            //   }
            // }
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
}
