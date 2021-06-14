import { Button, Col, Divider, Dropdown, FormInstance, Menu, message, Popconfirm, Radio, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import CreateForm from './component/CreateForm';
import { useEffect, useRef, useState } from 'react';
import UpdateForm from './component/UpdateForm';
import { dropDown ,add, getPageList} from './api';

interface IConfigProps {
}


const Config: React.FunctionComponent<IConfigProps> = (props) => {

    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    const createFormRef = useRef<FormInstance>()
    const updateFormRef = useRef<FormInstance>()
    const [row, setRow] = useState({})
    const [category, setCategory] = useState({})

    // const 
    // onChange3 = e => {
    //     console.log('radio3 checked', e.target.value);
    //     this.setState({
    //       value3: e.target.value,
    //     });
    //   };

    useEffect(() => {
        dropDown({ code: 'consts_type' }).then(rep => {
            let data: any = {};

            rep.data.data.map((item: any) => {
                //使用接口返回值的id做为 代替原本的0，1
                data[item.code] = {
                    //使用接口返回值中的overdueValue属性作为原本的text:后面的值
                    text: item.name,
                }
            })
            setCategory(data)
        })
    }, [])


    const columns: ProColumns<any>[] = [
        {
            title: '参数名称',
            dataIndex: 'name',
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '唯一编码',
            dataIndex: 'code', formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '系统参数',
            dataIndex: 'sysFlag',
            hideInSearch: true,
            hideInTable: true,
            formItemProps: {
                rules: [{ required: true }]
            },
            renderFormItem: (item,a,form) => {
                console.log(item,a,form)
                return <Radio.Group 
                // defaultValue={record.sysFlag}
                    options={[
                        { label: '是', value: '1' },
                        { label: '否', value: '0' },
                    ]}
                    // onChange={this.onChange3}
                    optionType="button"
                />
            }
        },
        {
            title: '所属分类',
            dataIndex: 'dictCode',
            valueType: 'select',
            valueEnum: category,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '参数值',
            dataIndex: 'params',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
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
                <a key="editable" onClick={() => {
                    setRow(record);
                    handleUpdateModalVisible(true);
                }}>
                    编辑
                </a>,
                <Divider type="vertical" />,
                <Popconfirm
                    title="确认删除？"
                    onConfirm={() => console.log(record)}
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

            request={async (
                // 第一个参数 params 查询表单和 params 参数的结合
                // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
                params,
                sort,
                filter,
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

            toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} onClick={() => handleModalVisible(true)} type="primary">新增配置</Button>]}
        />
        <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible} onOk={() => createFormRef.current?.submit()}>
            <ProTable<any, any>

                onSubmit={async (value) => {
                    console.log(value)
                    const { data } = await add(value);
                    if (data.success) {
                        message.success("添加成功")
                        handleModalVisible(false);
                        // if (actionRef.current) {
                        //     actionRef.current.reload();
                        // }
                    } else {
                        message.error("添加成功")
                    }
                }}

                formRef={createFormRef}
                form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter: { render: false } }}
                rowKey="key"
                type="form"
                columns={columns}
            />
        </CreateForm>
        <UpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible} onOk={() => updateFormRef.current?.submit()}>
            <ProTable<any, any>
                onSubmit={async (value) => {
                    console.log(value)
                }}

                formRef={createFormRef}
                form={{ layout: 'horizontal', labelCol: { span: 5 }, wrapperCol: { span: 15 }, submitter: { render: false }, initialValues: row }}

                rowKey="key"
                type="form"
                columns={columns}
            />
        </UpdateForm>
    </PageContainer>
};

export default Config;
