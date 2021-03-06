import ProForm, { ProFormCaptcha, ProFormText } from "@ant-design/pro-form";
import * as React from "react";
import { UserOutlined, LockOutlined, KeyOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { useState } from "react";
import { push } from "connected-react-router";
import {
  Wrap,
  Logind,
  Left,
  Right,
  Form,
  Copyright,
  Subtitle,
  Captcha,
  Logo,
} from "./style";
import { useQueryClient } from "react-query";
import axios from "axios";
import { login } from "../../features/user/userSlice";
import { mozt } from "../../utils/domain";
interface ILoginProps extends RouteComponentProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [ts, setTs] = useState<number>();
  const dispatch = useDispatch<any>();

  const refresh = () => {
    setTs(new Date().getTime());
  };
  return (
    <Wrap>
      <Logind>
        <Left>
          <img
            src="http://fudan.zcjb.com.cn/webdocs/ebidding/images/%E7%99%BB%E5%BD%95.png"
            alt=""
          />
        </Left>
        <Right>
          <Form>
            <ProForm
              initialValues={{
                username: "admin",
                password: "admin",
              }}
              onFinish={async (values) => {
                const {
                  data,
                }: {
                  data: {
                    code: number;
                    data: any;
                    success: boolean;
                    time: any;
                    message: string;
                  };
                } = await axios.post(mozt + "/login", values);
                if (data.success) {
                  if (data.code == 200) {
                    notification["success"]({
                      message: "欢迎",
                      description: "中午好，欢迎回来",
                    });
                    dispatch(login(data.data));
                    dispatch(push("/"));
                    return;
                  }
                }
                notification["error"]({
                  message: data.message,
                  description: "请输入正确的账号密码!",
                });

                // dispatch(login(values)).then(({ payload }: any) => {
                //   if (payload) {
                //     notification['success']({
                //       message: '欢迎',
                //       description:'中午好，欢迎回来'
                //     });
                //     dispatch(push("/"))
                //   } else {
                //
                //   }
                // }).catch((err: any) => {
                //   console.log(err)
                // });;
                // dispatch(push("/"));

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
                  submitText: "登录",
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  size: "large",
                  style: {
                    width: "100%",
                  },
                },
              }}
            >
              <h1>
                <Logo alt="logo" src="https://vitejs.dev/logo.svg" />
                快速开发平台
              </h1>
              <Subtitle>{/* 快速开发平台 */}</Subtitle>
              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined />,
                }}
                name="username"
                placeholder="请输入用户名 admin"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名!",
                  },
                ]}
              />
              <ProFormText.Password
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined />,
                }}
                name="password"
                placeholder="请输入密码 admin"
                rules={[
                  {
                    required: true,
                    message: "请输入密码!",
                  },
                ]}
              />

              <ProFormText
                fieldProps={{
                  size: "large",
                  prefix: <KeyOutlined />,
                  addonAfter: (
                    <Captcha
                      height="28"
                      onClick={refresh}
                      src={`https://worktile.com/api/account/security/captcha?t=${ts}`}
                      alt=""
                    />
                  ),
                }}
                name="captcha"
                placeholder="请输入验证码"
                rules={[
                  {
                    required: true,
                    message: "请输入验证码",
                  },
                ]}
              />
            </ProForm>
          </Form>
        </Right>
        <Copyright></Copyright>
      </Logind>
      ;
    </Wrap>
  );
};

export default Login;
