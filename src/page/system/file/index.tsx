import { Breadcrumb, Button, Col, Divider, Dropdown, Menu, message, PageHeaderProps, Popconfirm, Row, Switch, Tag, Tree, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsForm from './component/DetailsForm';
import ProDescriptions from '@ant-design/pro-descriptions';
import PreviewForm from './component/PreviewForm';

interface IFileProps {
}


const File: React.FunctionComponent<IFileProps> = (props) => {
    const [detailsModalVisible, handleDetailsModalVisible] = useState<boolean>(false);
    const [previewModalVisible, handlePreviewModalVisible] = useState<boolean>(false);
    const [row, setRow] = useState({});


    const columns: ProColumns<any>[] = [
        {
            title: '序号',
            dataIndex: 'index',
            render: (text, record, index) => `${index + 1}`,
            hideInSearch: true,
            hideInForm: true,
        },
        {
            title: '存储位置',
            dataIndex: 'fileLocation',
        },
        {
            title: '文件仓库',
            dataIndex: 'fileBucket',
        },
        {
            title: '文件名称',
            dataIndex: 'fileOriginName',
        },
        {
            title: '文件后缀',
            dataIndex: 'fileSuffix',
            hideInSearch: true,
            render: (dom, record) => <Tag color="blue">{record.fileSuffix}</Tag>
        },
        {
            title: '文件大小',
            dataIndex: 'fileSizeInfo',
            hideInSearch: true
        },
        {
            title: '唯一标识id',
            dataIndex: 'fileObjectName',
            hideInSearch: true
        },
        {
            title: '操作',
            dataIndex: 'index',
            width: 200,
            hideInSearch: true,
            render: (dom, record) => [
                <a key="download" onClick={() => console.log("download")}>
                    下载
              </a>,
                <Divider type="vertical" />,
                <a key="details" onClick={() => {
                    setRow(record);
                    handleDetailsModalVisible(true)
                }}>
                    详情
              </a>,
                <Divider type="vertical" />,
                <Popconfirm
                    title="确认删除？"
                >
                    <a key="editable">
                        删除
              </a>
                </Popconfirm>,
                <Divider type="vertical" />,
                <a key="preview" onClick={()=>{
                    setRow(record);
                    handlePreviewModalVisible(true)
                }}>
                    预览
         </a>
            ],
        },


    ];
    return <PageContainer
        title={false}
        breadcrumbRender={(props: any) => {
            return <Breadcrumb>
                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                {props.breadcrumb.routes.map((item: any) => <Breadcrumb.Item>
                    <Link to={item.path}>{item.breadcrumbName}</Link>
                </Breadcrumb.Item>)}
            </Breadcrumb>
        }}
    >
        <ProTable
            size="large"
            columns={columns}
            options={false}
            dataSource={[{ "createTime": "2020-09-23 23:13:27.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308786562069102593", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "WechatIMG100.jpeg", "fileSuffix": "jpeg", "fileSizeKb": "36", "fileSizeInfo": "35.93 kB", "fileObjectName": "1308786562069102593.jpeg", "filePath": null }, { "createTime": "2020-09-23 23:25:59.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308789715703365633", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "WechatIMG100.jpeg", "fileSuffix": "jpeg", "fileSizeKb": "36", "fileSizeInfo": "35.93 kB", "fileObjectName": "1308789715703365633.jpeg", "filePath": null }, { "createTime": "2020-09-23 23:33:57.000", "createUser": "1275735541155614721", "updateTime": null, "updateUser": null, "id": "1308791719171391489", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "Await.png", "fileSuffix": "png", "fileSizeKb": "55", "fileSizeInfo": "54.75 kB", "fileObjectName": "1308791719171391489.png", "filePath": null }, { "createTime": "2020-09-23 23:35:32.000", "createUser": "1275735541155614721", "updateTime": null, "updateUser": null, "id": "1308792119941332993", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "Await.png", "fileSuffix": "png", "fileSizeKb": "55", "fileSizeInfo": "54.75 kB", "fileObjectName": "1308792119941332993.png", "filePath": null }, { "createTime": "2020-09-23 23:36:08.000", "createUser": "1280709549107552257", "updateTime": null, "updateUser": null, "id": "1308792270080638977", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "WechatIMG173.jpeg", "fileSuffix": "jpeg", "fileSizeKb": "71", "fileSizeInfo": "70.74 kB", "fileObjectName": "1308792270080638977.jpeg", "filePath": null }, { "createTime": "2020-09-23 23:36:43.000", "createUser": "1280700700074041345", "updateTime": null, "updateUser": null, "id": "1308792417032273922", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "WechatIMG100.jpeg", "fileSuffix": "jpeg", "fileSizeKb": "36", "fileSizeInfo": "35.93 kB", "fileObjectName": "1308792417032273922.jpeg", "filePath": null }, { "createTime": "2020-09-24 10:16:11.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308953344138477569", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "情感素材.xlsx", "fileSuffix": "xlsx", "fileSizeKb": "10", "fileSizeInfo": "10.29 kB", "fileObjectName": "1308953344138477569.xlsx", "filePath": null }, { "createTime": "2020-09-24 11:02:38.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308965031704985601", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "新建 DOCX 文档.docx", "fileSuffix": "docx", "fileSizeKb": "15", "fileSizeInfo": "15.31 kB", "fileObjectName": "1308965031704985601.docx", "filePath": null }, { "createTime": "2020-09-24 12:07:13.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308981287728381954", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "Moorilla Mona slideshow_页面_08.jpg", "fileSuffix": "jpg", "fileSizeKb": "83", "fileSizeInfo": "83 kB", "fileObjectName": "1308981287728381954.jpg", "filePath": null }, { "createTime": "2020-09-24 12:37:16.000", "createUser": "1265476890672672808", "updateTime": null, "updateUser": null, "id": "1308988847877455873", "fileLocation": 4, "fileBucket": "defaultBucket", "fileOriginName": "11.png", "fileSuffix": "png", "fileSizeKb": "35", "fileSizeInfo": "34.84 kB", "fileObjectName": "1308988847877455873.png", "filePath": null }]}
            headerTitle={

                <Upload {...props}>
                    <Button icon={<UploadOutlined />} type="default">上传文件</Button>
                </Upload>}
        />
        <DetailsForm onCancel={() => handleDetailsModalVisible(false)} modalVisible={detailsModalVisible}>
            <ProDescriptions 
            column={1}
                dataSource={{
                    id: '这是一段文本columns',
                    fileLocation: '20200809',
                    fileBucket: '1212100',
                    fileOriginName: '1212100',
                    fileSuffix: 'all',
                    fileSizeInfo: 'open',
                    fileObjectName: 'open',
                    filePath: 'open',
                }}
                columns={[
                    {
                        title: '文件存储位置',
                        key: 'fileLocation',
                        dataIndex: 'id',
                    },
                    {
                        title: '文件仓库',
                        key: 'fileBucket',
                        dataIndex: 'fileBucket',
                    },
                    {
                        title: '文件名称',
                        key: 'fileOriginName',
                        dataIndex: 'id',
                    },
                    {
                        title: '文件后缀',
                        key: 'fileSuffix',
                        dataIndex: 'id',
                    },
                    {
                        title: '文件大小',
                        key: 'fileSizeInfo',
                        dataIndex: 'fileSizeInfo',
                    },
                    {
                        title: '唯一标识',
                        key: 'fileObjectName',
                        dataIndex: 'fileObjectName',
                    },
                    {
                        title: '存储路径',
                        key: 'filePath',
                        dataIndex: 'filePath',
                    },
                ]}
            >
            </ProDescriptions>

        </DetailsForm>
        <PreviewForm onCancel={() => handlePreviewModalVisible(false)} modalVisible={previewModalVisible}>
            <div>img</div>
        </PreviewForm>
    </PageContainer>
};

export default File;
