import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, Divider, FormInstance, Modal, Popconfirm } from 'antd';
import * as React from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react';
import DictManageCreateForm from './DictManageCreateForm';
import DictManageUpdateForm from './DictManageUpdateForm';

interface ICreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [row, setRow] = useState({})
  const createFormRef = useRef<FormInstance>()
  const updateFormRef = useRef<FormInstance>()
  const { modalVisible, onCancel } = props;
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
      dataIndex: 'value',

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
      render: (dom, record) => {
        if (record.status === 0) {
          return "正常"
        } if (record.status === 1) {
          return "错误"
        }
        return "未知"
      }
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
        <Popconfirm title="确认删除？" onConfirm={() => console.log(record)}>
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
    width={900}
  // footer={null}
  >
    <ProTable<any, any>


      search={{ collapseRender: false }}
      form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, }}
      rowKey="key"
      options={false}
      dataSource={[{"createTime":"2020-08-06 23:20:41.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1291393766048989186","typeId":"1291393441594408961","value":"否","code":"false","sort":100,"remark":"未结束","status":0},{"createTime":"2020-08-06 23:20:22.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1291393684314587138","typeId":"1291393441594408961","value":"是","code":"true","sort":100,"remark":"已结束","status":0}]}
    
      toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">新增数据</Button>]}
      columns={columns}
    />
    <DictManageCreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible} onOk={() => createFormRef.current?.submit()}>
      <ProTable<any, any>

        onSubmit={async (value) => {
          console.log(value)
          // const success = await handleAdd(value);
          // if (success) {
          //   handleModalVisible(false);
          //   if (actionRef.current) {
          //     actionRef.current.reload();
          //   }
          // }
        }}
        search={{ collapseRender: false }}
        formRef={createFormRef}
        form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter:{render:false}}}
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
         
        }}
        search={{ collapseRender: false }}
        formRef={updateFormRef}
        form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter:{render:false},initialValues:row}}
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
