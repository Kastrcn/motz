import React, { useState } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { renderRoutes } from "react-router-config";
import { ProSettings, SettingDrawer } from '@ant-design/pro-layout';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';

import { Link, Route } from 'react-router-dom'

export default (props: any) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}

        siderWidth={245}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
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
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!props?.collapsed && 'HOME'}
            </a>
          );
        }}
        title="快速开发平台"
        logo="https://vitejs.dev/logo.svg"
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <Link
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}

            to={item.path || '/welcome'}
          >
            {dom}
          </Link>
        )}
        
        headerContentRender={()=> <Menu  mode="horizontal">
        <Menu.Item key="mail" >
        系统应用
        </Menu.Item>
        <Menu.Item key="app"  >
        在线办公
        </Menu.Item>
       
        <Menu.Item key="alipay">
        高级体验
        </Menu.Item>
      </Menu>}
        rightContentRender={() => (

          <div>
            <Dropdown overlay={<Menu className="umi-plugin-layout-menu">
              <Menu.Item
                key="logout"
                onClick={() => { }

                }
              >
                {/* <LogoutOutlined /> */}
        退出登录
      </Menu.Item>
            </Menu>}>
              <span className="umi-plugin-layout-action">
                <Avatar
                  size="small"
                  className="umi-plugin-layout-avatar"
                  src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}
                  alt="avatar"
                />
                <span className="umi-plugin-layout-name">
                  admin </span>
              </span>
            </Dropdown>

          </div>
        )}
        {...settings}
      >
        {renderRoutes(props.route.routes)}


      </ProLayout>

    </div>
  );
};
