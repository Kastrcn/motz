import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Divider, FormInstance, message, Modal, Popconfirm } from 'antd';
import * as React from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react';
import DictManageCreateForm from './DictManageCreateForm';
import DictManageUpdateForm from './DictManageUpdateForm';
import { getDictPageList, ditcAdd, dictDel, dictUpdate } from '../api';

interface ICreateFormProps {
  id: number;
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [row, setRow] = useState<any>({})
  const createFormRef = useRef<FormInstance>()
  const updateFormRef = useRef<FormInstance>()
  const actionRef = useRef<ActionType>();
  const { modalVisible, onCancel } = props;

  const deleteById = async (record: any) => {
    const { data } = await dictDel({ id: record.id });
    if (data.success) {
      message.success("删除成功")
      if (actionRef.current) {
        actionRef.current.reload();
      }
    } else {
      message.error("删除成功")
    }
  }

  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      render: (text, record, index) => `${index + 1}`,
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '字典值',
      dataIndex: 'name',

      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '唯一编码',
      dataIndex: 'code',

      formItemProps: {
        rules: [{ required: true }]
      }
    },
    {
      title: '排序',
      dataIndex: 'sort',
      initialValue: 100,
      valueType: 'digit',
      hideInSearch: true
    },
    {
      title: '备注',
      valueType: 'textarea',
      dataIndex: 'remark',
      hideInSearch: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch: true,
      valueType: 'select',
      valueEnum: {
        1: "启用",
        0: "停用",
      },

    },

    {
      title: '操作',
      dataIndex: 'index',
      width: 200,
      hideInSearch: true,
      hideInForm: true,
      render: (dom, record) => [
        <a key="editable" onClick={() => {

          handleUpdateModalVisible(true);
          setRow(record);
        }}>
          编辑
        </a>,
        <Divider type="vertical" />,
        <Popconfirm title="确认删除？" onConfirm={() => deleteById(record)}>
          <a key="editable">删除 </a>
        </Popconfirm>

      ],
    },
  ];
  return <Modal
    destroyOnClose
    title="字典值管理"
    visible={modalVisible}
    onCancel={() => onCancel()}
    width={1200}
  >
    <ProTable<any, any>
      search={{ collapseRender: false }}
      form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, }}
      rowKey="key"
      options={false}

      request={async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params,
        sort,
        filter,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const msg = await getDictPageList({ ...params, ...{ dictTypeId: props.id } });
        return {
          data: msg.data.data,
          // success 请返回 true，
          // 不然 table 会停止解析数据，即使有数据
          success: msg.data.success,
          // 不传会使用 data 的长度，如果是分页一定要传
          total: msg.data.total,
        };
      }}
      actionRef={actionRef}

      toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">新增数据</Button>]}
      columns={columns}
    />
    <DictManageCreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible} onOk={() => createFormRef.current?.submit()}>
      <ProTable<any, any>

        onSubmit={async (value) => {

          const { data } = await ditcAdd({ ...value, ...{ dictTypeId: props.id } });
          if (data.success) {
            message.success("添加成功")
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          } else {
            message.error("添加成功")
          }
        }}
        search={{ collapseRender: false }}
        formRef={createFormRef}
        form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter: { render: false } }}
        rowKey="key"
        options={false}
        type="form"
        toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">新增数据</Button>]}
        columns={columns}

      />
    </DictManageCreateForm>
    <DictManageUpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible} onOk={() => updateFormRef.current?.submit()}>
      <ProTable<any, any>

        onSubmit={async (value) => {
          console.log(value)
          console.log(value)
          const { data } = await dictUpdate({ ...value, ...{ id: row.id } });

          if (data.success) {
            message.success("修改成功")
            handleUpdateModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          } else {
            message.error("修改失败")
          }

        }}
        search={{ collapseRender: false }}
        formRef={updateFormRef}
        form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter: { render: false }, initialValues: row }}
        rowKey="key"
        options={false}
        type="form"
        toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">新增数据</Button>]}
        columns={columns}

      />
    </DictManageUpdateForm>
  </Modal>;
};

export default CreateForm;
