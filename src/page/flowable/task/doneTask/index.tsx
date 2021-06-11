import { Button, Col, Divider, Dropdown, FormInstance, Menu, Popconfirm, Row, Switch, Tree } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import * as React from 'react';
import ProCard from '@ant-design/pro-card';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useRef, useState } from 'react';

interface IDoneTaskProps {
}


const DoneTask: React.FunctionComponent<IDoneTaskProps> = (props) => {
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    const createFormRef = useRef<FormInstance>()
    const updateFormRef = useRef<FormInstance>()
    const [row, setRow] = useState({})


    const columns: ProColumns<any>[] = [
        {
            title: '流程名称',
            dataIndex: '[procIns][name]',
            ellipsis: true,
            render:(dom,record)=>{return record.procIns.name},
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '任务名称',
            dataIndex: 'name',
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '流程分类',
            dataIndex: 'name',
            valueType:'select',
            hideInTable:true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '发起人',
            dataIndex: 'assigneeName',
            hideInSearch: true,
            formItemProps: {
                rules: [{ required: true }]
            }
        },
        {
            title: '发起时间',
            dataIndex: 'formatCreateTime',
            hideInSearch: true
        },
        {
            title: '办理时间',
            dataIndex: 'formatEndTime',
            hideInSearch: true
        },
        {
            title: '任务历时',
            dataIndex: 'duration',
            hideInSearch: true
        },
        {
            title: '优先级',
            dataIndex: 'remark',
            valueType: 'textarea',
            hideInTable:true,
        },

        {
            title: '创建时间',
            dataIndex: 'createTime',
            valueType: 'dateTimeRange',
            hideInTable:true,
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
                    追踪
              </a>

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
            dataSource={[{"id":"1309056055194353665","name":"填写申请单","activityId":"sid-14E807D7-6B9F-4AEC-8625-B8E649679ED7","executionId":"1309056054833643522","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-24 17:04:19","formatCreateTime":"2020-09-24 17:04","claimTime":null,"endTime":"2020-09-24 17:04:19","formatEndTime":"2020-09-24 17:04","duration":"0秒","dueDate":null,"delegationState":null,"procIns":{"id":"1309056054829449218","name":"超级管理员在2020-09-24 17:04:19发起了出差流程","businessKey":null,"startTime":"2020-09-24 17:04:19","formatStartTime":"2020-09-24 17:04","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"travel:1:1304341427379126274","key":"travel","name":"出差流程","category":"travel","categoryName":"差旅类","description":"出差流程","version":1,"suspended":false,"deploymentId":"1304341425068064769"}}},{"id":"1309034744657149953","name":"填写申请单","activityId":"sid-14E807D7-6B9F-4AEC-8625-B8E649679ED7","executionId":"1309034741121351681","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-24 15:39:38","formatCreateTime":"2020-09-24 15:39","claimTime":null,"endTime":"2020-09-24 15:39:38","formatEndTime":"2020-09-24 15:39","duration":"0秒","dueDate":null,"delegationState":null,"procIns":{"id":"1309034741079408641","name":"超级管理员在2020-09-24 15:39:38发起了出差流程","businessKey":null,"startTime":"2020-09-24 15:39:37","formatStartTime":"2020-09-24 15:39","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"travel:1:1304341427379126274","key":"travel","name":"出差流程","category":"travel","categoryName":"差旅类","description":"出差流程","version":1,"suspended":false,"deploymentId":"1304341425068064769"}}},{"id":"1309007697796857857","name":"填写申请单","activityId":"sid-14E807D7-6B9F-4AEC-8625-B8E649679ED7","executionId":"1309007697436147713","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-24 13:52:09","formatCreateTime":"2020-09-24 13:52","claimTime":null,"endTime":"2020-09-24 13:52:10","formatEndTime":"2020-09-24 13:52","duration":"0秒","dueDate":null,"delegationState":null,"procIns":{"id":"1309007697431953410","name":"超级管理员在2020-09-24 13:52:10发起了出差流程","businessKey":null,"startTime":"2020-09-24 13:52:09","formatStartTime":"2020-09-24 13:52","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"travel:1:1304341427379126274","key":"travel","name":"出差流程","category":"travel","categoryName":"差旅类","description":"出差流程","version":1,"suspended":false,"deploymentId":"1304341425068064769"}}},{"id":"1308999622763413505","name":"填写申请单","activityId":"sid-14E807D7-6B9F-4AEC-8625-B8E649679ED7","executionId":"1308999621752586241","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-24 13:20:04","formatCreateTime":"2020-09-24 13:20","claimTime":null,"endTime":"2020-09-24 13:20:04","formatEndTime":"2020-09-24 13:20","duration":"0秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308999621706448897","name":"超级管理员在2020-09-24 13:20:04发起了出差流程","businessKey":null,"startTime":"2020-09-24 13:20:04","formatStartTime":"2020-09-24 13:20","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"travel:1:1304341427379126274","key":"travel","name":"出差流程","category":"travel","categoryName":"差旅类","description":"出差流程","version":1,"suspended":false,"deploymentId":"1304341425068064769"}}},{"id":"1308591518118010881","name":"填写申请单","activityId":"sid-54572B0C-206E-423B-AA4A-170EA2547C2F","executionId":"1308591517363036162","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-23 10:18:24","formatCreateTime":"2020-09-23 10:18","claimTime":null,"endTime":"2020-09-24 09:38:03","formatEndTime":"2020-09-24 09:38","duration":"23小时19分38秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308590488798060546","name":"超级管理员在2020-09-23 10:14:21发起了请假流程","businessKey":null,"startTime":"2020-09-23 10:14:19","formatStartTime":"2020-09-23 10:14","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"leave:1:1294922085572947969","key":"leave","name":"请假流程","category":"kaoqin","categoryName":"考勤类","description":"请假流程","version":1,"suspended":false,"deploymentId":"1294922083219943426"}}},{"id":"1308793779996524545","name":"填写申请单","activityId":"sid-123D4D44-47BF-4F35-A03B-6E98CA4806B4","executionId":"1308793779736477697","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-23 23:42:08","formatCreateTime":"2020-09-23 23:42","claimTime":null,"endTime":"2020-09-23 23:42:08","formatEndTime":"2020-09-23 23:42","duration":"0秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308793779715506178","name":"超级管理员在2020-09-23 23:42:08发起了转正流程","businessKey":null,"startTime":"2020-09-23 23:42:07","formatStartTime":"2020-09-23 23:42","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"formal:1:1295553082574471169","key":"formal","name":"转正流程","category":"xingzheng","categoryName":"行政类","description":"转正流程","version":1,"suspended":false,"deploymentId":"1295553080485707777"}}},{"id":"1308590492497436673","name":"填写申请单","activityId":"sid-54572B0C-206E-423B-AA4A-170EA2547C2F","executionId":"1308590489553035265","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-23 10:14:20","formatCreateTime":"2020-09-23 10:14","claimTime":null,"endTime":"2020-09-23 10:14:22","formatEndTime":"2020-09-23 10:14","duration":"2秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308590488798060546","name":"超级管理员在2020-09-23 10:14:21发起了请假流程","businessKey":null,"startTime":"2020-09-23 10:14:19","formatStartTime":"2020-09-23 10:14","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"leave:1:1294922085572947969","key":"leave","name":"请假流程","category":"kaoqin","categoryName":"考勤类","description":"请假流程","version":1,"suspended":false,"deploymentId":"1294922083219943426"}}},{"id":"1308406822629158913","name":"填写申请单","activityId":"sid-54572B0C-206E-423B-AA4A-170EA2547C2F","executionId":"1308406819361796097","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-22 22:04:30","formatCreateTime":"2020-09-22 22:04","claimTime":null,"endTime":"2020-09-22 22:04:32","formatEndTime":"2020-09-22 22:04","duration":"2秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308406818585849858","name":"超级管理员在2020-09-22 22:04:31发起了请假流程","businessKey":null,"startTime":"2020-09-22 22:04:29","formatStartTime":"2020-09-22 22:04","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"leave:1:1294922085572947969","key":"leave","name":"请假流程","category":"kaoqin","categoryName":"考勤类","description":"请假流程","version":1,"suspended":false,"deploymentId":"1294922083219943426"}}},{"id":"1308406620056858626","name":"填写申请单","activityId":"sid-14E807D7-6B9F-4AEC-8625-B8E649679ED7","executionId":"1308406613807345665","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-22 22:03:41","formatCreateTime":"2020-09-22 22:03","claimTime":null,"endTime":"2020-09-22 22:03:44","formatEndTime":"2020-09-22 22:03","duration":"2秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308406613064953858","name":"超级管理员在2020-09-22 22:03:43发起了出差流程","businessKey":null,"startTime":"2020-09-22 22:03:40","formatStartTime":"2020-09-22 22:03","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"travel:1:1304341427379126274","key":"travel","name":"出差流程","category":"travel","categoryName":"差旅类","description":"出差流程","version":1,"suspended":false,"deploymentId":"1304341425068064769"}}},{"id":"1308406304594866177","name":"填写申请单","activityId":"sid-123D4D44-47BF-4F35-A03B-6E98CA4806B4","executionId":"1308406301486886914","assignee":"1265476890672672808","assigneeName":"超级管理员","assigneeInfo":"处理人：超级管理员","priority":50,"createTime":"2020-09-22 22:02:26","formatCreateTime":"2020-09-22 22:02","claimTime":null,"endTime":"2020-09-22 22:02:29","formatEndTime":"2020-09-22 22:02","duration":"2秒","dueDate":null,"delegationState":null,"procIns":{"id":"1308406300706746370","name":"超级管理员在2020-09-22 22:02:28发起了转正流程","businessKey":null,"startTime":"2020-09-22 22:02:25","formatStartTime":"2020-09-22 22:02","endTime":null,"formatEndTime":null,"startUserId":"1265476890672672808","startUserName":"超级管理员","ended":false,"suspended":false,"procDef":{"id":"formal:1:1295553082574471169","key":"formal","name":"转正流程","category":"xingzheng","categoryName":"行政类","description":"转正流程","version":1,"suspended":false,"deploymentId":"1295553080485707777"}}}]}
            toolBarRender={() => [<Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>新建职位</Button>]}
        />
        
    </PageContainer>
};

export default DoneTask;
