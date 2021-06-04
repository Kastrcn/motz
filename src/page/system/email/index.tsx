import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormDateRangePicker, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Tabs } from 'antd';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Editor from 'wangeditor'
interface IEmailSendProps {
}

const { TabPane } = Tabs;

function callback(key:any) {
  console.log(key);
}

const EmailSend: React.FunctionComponent<IEmailSendProps> = (props) => {
  const _div = useRef();
  useEffect(() => {
    // if(_div!=null){
    //   var editor = new Editor(ReactDOM.findDOMNode(_div));
    //   editor.create();

    // }
   
  }, [])

  return <ProCard>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="发送邮件" key="1">
        <ProForm<{
          name: string;
          company?: string;
          useMode?: string;
        }>
          onFinish={async (values) => {
          }}
          params={{}}

        >
          <ProForm.Group>
            <ProFormText
              width="lg"
              rules={[{ required: true, message: '请输入收件邮箱!' }]}
              name="name"
              label="收件邮箱"
              placeholder="请输入收件邮箱"
            />

          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              rules={[{ required: true, message: '请输入邮件标题!' }]}
              name={['contract', 'name']}
              width="lg"
              label="邮件标题"
              placeholder="请输入邮件标题"
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormTextArea rules={[{ required: true, message: '请输入邮件内容!' }]}
              width="lg" label="邮件内容" name="remark" placeholder="请输入邮件内容" />
             {/* <div ref={_div}></div> */}
          </ProForm.Group>
        </ProForm>
      </TabPane>
      <TabPane tab="发送HTML邮件" key="2">
        <ProForm<{
          name: string;
          company?: string;
          useMode?: string;
        }>
          onFinish={async (values) => {
          }}
          params={{}}

        >
          <ProForm.Group>
            <ProFormText
              width="lg"
              rules={[{ required: true, message: '请输入收件邮箱!' }]}
              name="name"
              label="收件邮箱"
              placeholder="请输入收件邮箱"
            />

          </ProForm.Group>
          <ProForm.Group>
            <ProFormText
              rules={[{ required: true, message: '请输入邮件标题!' }]}
              name={['contract', 'name']}
              width="lg"
              label="邮件标题"
              placeholder="请输入邮件标题"
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormTextArea rules={[{ required: true, message: '请输入邮件内容!' }]}
              width="lg" label="邮件内容" name="remark" placeholder="请输入邮件内容" />
          </ProForm.Group>
        </ProForm>
      </TabPane>
    </Tabs>
  </ProCard>;
};

export default EmailSend;
