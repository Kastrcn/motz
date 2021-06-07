// import React from 'react';
// import { message, Switch } from 'antd';
// import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
// import { KeyOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
// // import { login } from '@/services/login';
// // import { TOKEN, USER } from '@/globalConst';

// const waitTime = (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

// export default (props: any) => {
// return (
//   );
// };


import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import * as React from 'react';
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import {  useDispatch } from 'react-redux'
import {  login } from '../../features/user/userSlice'
import './index.less'
import { notification } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
interface ILoginProps extends RouteComponentProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const dispatch = useDispatch()
  return <div className="wrap">
    <div className="login">
      <div className="left">
        <img src="http://fudan.zcjb.com.cn/webdocs/ebidding/images/%E7%99%BB%E5%BD%95.png" alt="" />
      </div>
      <div className="right">

        <div
          className="form"
        >
          <ProForm
            onFinish={async (values) => {
              console.log(values)
              if(values.password=="admin"&&values.username=="admin"){
                dispatch(login());
                props.history.push("/");
              }else{
                notification['error']({
                  message: '账号密码错误',
                  description:
                    '请输入正确的账号密码!',
                });
              }
            
              
              // let response = await login(values);
              // if (response.success) {
              //   const { token, loginSysUserVo } = response.data;
              //   localStorage.setItem(TOKEN, token);
              //   localStorage.setItem(USER, JSON.stringify(loginSysUserVo));
              //   console.log(response);
              //   message.success('登录成功！');
              //   props.history.push(`/welcome`);
              // }
            }}
            submitter={{
              searchConfig: {
                submitText: '登录',
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
          >
            <h1 >
              <img

                alt="logo"
                src="https://vitejs.dev/logo.svg"
              />
          快速开发平台
        </h1>
            <div
              className="subtitle"
            >
              {/* 快速开发平台 */}
            </div>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              name="username"
              placeholder="请输入用户名 admin"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              name="password"
              placeholder="请输入密码 admin"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <KeyOutlined />,
              }}
              captchaProps={{
                size: 'large',
              }}
              phoneName="phone"
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
              ]}
              placeholder="请输入验证码"
              onGetCaptcha={async (phone) => {
                // await waitTime(1000);
                // message.success(`手机号 ${phone} 验证码发送成功!`);
              }}
            />
            {/* <ProFormText>
              <img src="data:image/jpg;base64,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" alt="" />
            </ProFormText> */}
          </ProForm>
        </div>

      </div>
      <div className="copyright">

      </div>
    </div>
  </div>;
};

export default Login;
