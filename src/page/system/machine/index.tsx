import ProCard from "@ant-design/pro-card";
import ProDescriptions from "@ant-design/pro-descriptions";

import { Col, Divider, Row } from "antd";
import * as React from "react";

interface IMachineProps {}

const Machine: React.FunctionComponent<IMachineProps> = (props) => {
  return (
    <>
      <ProCard gutter={8} ghost>
        <ProCard colSpan={12} layout="center" bordered>
          <ProDescriptions
            column={1}
            title="系统信息 "
            dataSource={{
              name: "Linux",
              framework: "amd64",
              version: "3.10.0-957.5.1.el7.x86_64",
              hostname: "iZ2zecrtiof5z1dkezlxwqZ",
              ip: "172.17.56.132",
            }}
            columns={[
              {
                title: "系统名称",
                key: "name",
                dataIndex: "name",
              },
              {
                title: "系统架构",
                key: "framework",
                dataIndex: "framework",
              },
              {
                title: "系统版本",
                key: "version",
                dataIndex: "version",
              },
              {
                title: "主机名称",
                key: "hostname",
                dataIndex: "hostname",
              },
              {
                title: "主机IP地址",
                key: "ip",
                dataIndex: "ip",
              },
            ]}
          ></ProDescriptions>
        </ProCard>
        <ProCard colSpan={12} layout="center" bordered>
          <ProDescriptions
            column={1}
            title="Java信息"
            dataSource={{
              name: "OpenJDK 64-Bit Server VM",
              version: "25.111-b14",
              provider: "Oracle Corporation",
              javaName: "OpenJDK Runtime Environment",
              javaVersion: "1.8.0_111-8u111-b14-2~bpo8+1-b14",
            }}
            columns={[
              {
                title: "虚拟机名称",
                key: "name",
                dataIndex: "name",
              },
              {
                title: "虚拟机版本",
                key: "version",
                dataIndex: "version",
              },
              {
                title: "虚拟机供应商",
                key: "provider",
                dataIndex: "provider",
              },
              {
                title: "java名称",
                key: "javaName",
                dataIndex: "javaName",
              },
              {
                title: "java版本",
                key: "javaVersion",
                dataIndex: "javaVersion",
              },
            ]}
          ></ProDescriptions>
        </ProCard>
      </ProCard>
      <ProCard style={{ marginTop: 8 }} gutter={8} ghost>
        <ProCard layout="center" bordered>
          <ProDescriptions
            column={2}
            title="JVM内存信息"
            dataSource={{
              moreMemory: "843 MB",
              usableMemory: "599.05 MB",
              totalMemory: "492 MB",
              usedMemory: "243.95 MB",
              freeMemory: "248.05 MB",
              usageRate: "49.58%",
            }}
            columns={[
              {
                title: "最大内存",
                key: "moreMemory",
                dataIndex: "moreMemory",
              },
              {
                title: "可用内存",
                key: "usableMemory",
                dataIndex: "usableMemory",
              },
              {
                title: "总内存",
                key: "totalMemory",
                dataIndex: "totalMemory",
              },
              {
                title: "已使用内存",
                key: "usedMemory",
                dataIndex: "usedMemory",
              },
              {
                title: "空余内存",
                key: "freeMemory",
                dataIndex: "freeMemory",
              },
              {
                title: "使用率",
                key: "usageRate",
                dataIndex: "usageRate",
              },
            ]}
          ></ProDescriptions>
        </ProCard>
      </ProCard>
    </>
  );
};

export default Machine;
