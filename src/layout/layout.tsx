import React, { useState } from "react";
import { Avatar, Dropdown, Menu, message, Tooltip } from "antd";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { renderRoutes } from "react-router-config";
import { ProSettings, SettingDrawer } from "@ant-design/pro-layout";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import defaultProps from "./_defaultProps";
import homeProps from "./_homeProps";
import advancedProps from "./_advancedProps";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import { logout } from "../features/user/userSlice";
import Authorized from "../component/Authorized";
import { Action, ActionDiv } from "./style";
import { push } from "connected-react-router";
const menu = [defaultProps, homeProps, advancedProps];

export default (props: any) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState("/welcome");
  const dispatch = useDispatch();
  const [menuIndex, setMenuIndex] = useState<number>(0);
  const changeMenu = (index: number) => {
    const hide = message.loading("正在切换应用..", 0);
    setMenuIndex(index);
    setTimeout(hide, 0);
  };
  return (
    <Authorized>
      <div
        id="test-pro-layout"
        style={{
          height: "100vh",
        }}
      >
        <ProLayout
          {...menu[menuIndex]}
          location={{
            pathname,
          }}
          siderWidth={245}
          menuFooterRender={(props) => {
            return (
              <a
                style={{
                  lineHeight: "48rpx",
                  display: "flex",
                  height: 48,
                  color: "rgba(255, 255, 255, 0.65)",
                  alignItems: "center",
                }}
                href="https://preview.pro.ant.design/dashboard/analysis"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="pro-logo"
                  src="https://procomponents.ant.design/favicon.ico"
                  style={{
                    width: 16,
                    height: 16,
                    margin: "0 16px",
                    marginRight: 10,
                  }}
                />
                {!props?.collapsed && "HOME"}
              </a>
            );
          }}
          title="快速开发平台"
          logo="https://vitejs.dev/logo.svg"
          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, dom) => (
            <Link
              onClick={() => {
                setPathname(item.path || "/welcome");
              }}
              to={item.path || "/welcome"}
            >
              {dom}
            </Link>
          )}
          headerContentRender={() => (
            <Menu mode="horizontal" defaultActiveFirst>
              <Menu.Item key="mail" onClick={() => changeMenu(0)}>
                系统应用
              </Menu.Item>
              <Menu.Item key="app" onClick={() => changeMenu(1)}>
                在线办公
              </Menu.Item>

              <Menu.Item key="alipay" onClick={() => changeMenu(2)}>
                高级体验
              </Menu.Item>
            </Menu>
          )}
          rightContentRender={() => (
            <>
              <Tooltip title="使用文档">
                <Action
                  style={{
                    color: "inherit",
                  }}
                  target="_blank"
                  href="https://pro.ant.design/docs/getting-started"
                  rel="noopener noreferrer"
                >
                  <QuestionCircleOutlined />
                </Action>
              </Tooltip>

              <ActionDiv>
                <Dropdown
                  overlay={
                    <Menu className="umi-plugin-layout-menu">
                      <Menu.Item
                        key="logout"
                        onClick={() => {
                          dispatch(logout());
                          dispatch(push("/login"));
                        }}
                      >
                        {/* <LogoutOutlined /> */}
                        个人中心
                      </Menu.Item>{" "}
                      <Menu.Item
                        key="logout"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        {/* <LogoutOutlined /> */}
                        设置
                      </Menu.Item>{" "}
                      <Menu.Item
                        key="logout"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        {/* <LogoutOutlined /> */}
                        退出登录
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <span className="umi-plugin-layout-action">
                    <Avatar
                      size="small"
                      className="umi-plugin-layout-avatar"
                      src={
                        "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                      }
                      alt="avatar"
                    />
                    <span className="umi-plugin-layout-name">admin </span>
                  </span>
                </Dropdown>
              </ActionDiv>
            </>
          )}
          {...settings}
        >
          {renderRoutes(props.route.routes)}
        </ProLayout>
      </div>
    </Authorized>
  );
};
