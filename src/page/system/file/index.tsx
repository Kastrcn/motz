import { Breadcrumb, Button, Col, Divider, Dropdown, Menu, message, PageHeaderProps, Popconfirm, Row, Switch, Tag, Tree, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
interface IFileProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const File: React.FunctionComponent<IFileProps> = (props) => {

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [
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
                <a key="editable">
                    下载
              </a>,
               <Divider type="vertical" />,
                <a key="editable">
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
                <a key="editable">
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
    </PageContainer>
};

export default File;
