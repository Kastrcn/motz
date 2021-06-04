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
import './index.less'
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
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
              placeholder="请输入用户名"
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
              placeholder="请输入密码"
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
          </ProForm>
        </div>

      </div>
      <div className="copyright">

      </div>
    </div>
  </div>;
};

export default Login;
