import { Button, Col, Divider, Dropdown, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';

interface IConfigProps {
}

const treeData: any = [{ "id": "1265476890651701250", "parentId": "0", "title": "华夏集团", "value": "1265476890651701250", "weight": 100, "children": [{ "id": "1265476890672672769", "parentId": "1265476890651701250", "title": "华夏集团北京分公司", "value": "1265476890672672769", "weight": 100, "children": [{ "id": "1265476890672672771", "parentId": "1265476890672672769", "title": "研发部", "value": "1265476890672672771", "weight": 100, "children": [], "pid": "1265476890672672769" }, { "id": "1265476890672672772", "parentId": "1265476890672672769", "title": "企划部", "value": "1265476890672672772", "weight": 100, "children": [], "pid": "1265476890672672769" }], "pid": "1265476890651701250" }, { "id": "1265476890672672770", "parentId": "1265476890651701250", "title": "华夏集团成都分公司", "value": "1265476890672672770", "weight": 100, "children": [{ "id": "1265476890672672773", "parentId": "1265476890672672770", "title": "市场部", "value": "1265476890672672773", "weight": 100, "children": [{ "id": "1265476890672672775", "parentId": "1265476890672672773", "title": "市场部二部", "value": "1265476890672672775", "weight": 100, "children": [], "pid": "1265476890672672773" }], "pid": "1265476890672672770" }, { "id": "1265476890672672774", "parentId": "1265476890672672770", "title": "财务部", "value": "1265476890672672774", "weight": 100, "children": [], "pid": "1265476890672672770" }], "pid": "1265476890651701250" }], "pid": "0" }];

const Config: React.FunctionComponent<IConfigProps> = (props) => {
    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log('selected', selectedKeys, info);
    };
    const columns: ProColumns<any>[] = [
        {
            title: '参数名称',
            dataIndex: 'name',
        },
        {
            title: '唯一编码',
            dataIndex: 'code',
        },
        {
            title: '参数值',
            dataIndex: 'value',
            hideInSearch: true
        },
        {
            title: '所属分类',
            dataIndex: 'groupCode',
        },
        {
            title: '备注',
            dataIndex: 'remark',
            hideInSearch: true
        },
        
        {
            title: '操作',
            dataIndex: 'index',
            width: 120,
            hideInSearch: true,
            render: (dom, record) => [
                <a key="editable">
                    编辑
              </a>,
                 <Divider type="vertical" />,
                 <Popconfirm
                 title="确认删除？"
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
                    dataSource={[{"createTime":"2020-06-07 18:24:23.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1269575927357071361","name":"腾讯云短信secretId","code":"GUNS_TENCENT_SMS_SECRET_ID","value":"你的secretId","sysFlag":"Y","remark":"腾讯云短信secretId","status":0,"groupCode":"TENCENT_SMS"},{"createTime":"2020-06-07 18:25:02.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1269576089294954497","name":"腾讯云短信签名","code":"GUNS_TENCENT_SMS_SIGN","value":"Guns快速开发平台","sysFlag":"Y","remark":"腾讯云短信签名","status":0,"groupCode":"TENCENT_SMS"},{"createTime":"2020-06-07 18:24:51.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1269576044084551682","name":"腾讯云短信sdkAppId","code":"GUNS_TENCENT_SMS_SDK_APP_ID","value":"1400375123","sysFlag":"Y","remark":"腾讯云短信sdkAppId","status":0,"groupCode":"TENCENT_SMS"},{"createTime":"2020-06-07 18:24:39.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1269575991693500418","name":"腾讯云短信secretKey","code":"GUNS_TENCENT_SMS_SECRET_KEY","value":"你的secretkey","sysFlag":"Y","remark":"腾讯云短信secretKey","status":0,"groupCode":"TENCENT_SMS"},{"createTime":"2020-07-29 11:05:55.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1288309751255412737","name":"Oauth用户登录的开关","code":"GUNS_ENABLE_OAUTH_LOGIN","value":"true","sysFlag":"Y","remark":"Oauth用户登录的开关","status":0,"groupCode":"OAUTH"},{"createTime":"2020-07-29 11:07:05.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1288310043346743297","name":"Oauth码云登录ClientId","code":"GUNS_OAUTH_GITEE_CLIENT_ID","value":"你的clientId","sysFlag":"Y","remark":"Oauth码云登录ClientId","status":0,"groupCode":"OAUTH"},{"createTime":"2020-07-29 11:08:01.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1288310280056483841","name":"Oauth码云登录回调地址","code":"GUNS_OAUTH_GITEE_REDIRECT_URI","value":"http://127.0.0.1:82/oauth/callback/gitee","sysFlag":"Y","remark":"Oauth码云登录回调地址","status":0,"groupCode":"OAUTH"},{"createTime":"2020-07-29 11:07:32.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1288310157876408321","name":"Oauth码云登录ClientSecret","code":"GUNS_OAUTH_GITEE_CLIENT_SECRET","value":"你的clientSecret","sysFlag":"Y","remark":"Oauth码云登录ClientSecret","status":0,"groupCode":"OAUTH"},{"createTime":"2020-06-09 23:42:37.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1270380786649972738","name":"win本地上传文件路径","code":"GUNS_FILE_UPLOAD_PATH_FOR_WINDOWS","value":"d:/tmp","sysFlag":"Y","remark":"win本地上传文件路径","status":0,"groupCode":"FILE_PATH"},{"createTime":"2020-06-09 23:42:37.000","createUser":"1265476890672672808","updateTime":null,"updateUser":null,"id":"1270380786649972739","name":"linux/mac本地上传文件路径","code":"GUNS_FILE_UPLOAD_PATH_FOR_LINUX","value":"/tmp","sysFlag":"Y","remark":"linux/mac本地上传文件路径","status":0,"groupCode":"FILE_PATH"}]}
                    toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary">新建职位</Button>]}
                />
    </PageContainer>
};

export default Config;
