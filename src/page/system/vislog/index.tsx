import { PageContainer } from "@ant-design/pro-layout";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import * as React from "react";

interface ISysMenuListProps {}

const VisLog: React.FunctionComponent<ISysMenuListProps> = (props) => {
  const columns: ProColumns<any>[] = [
    {
      title: "id",
      dataIndex: "id",
      search: false,
    },
    {
      title: "ip",
      dataIndex: "ip",
    },
    {
      title: "系统",
      dataIndex: "osName",
    },

    {
      title: "浏览器",
      dataIndex: "browserName",
    },
    {
      title: "浏览器版本号",
      dataIndex: "browserVersion",
    },
    {
      title: "userAgent",
      dataIndex: "userAgent",
      width: 300,
    },
    {
      title: "状态码",
      dataIndex: "code",
    },

    {
      title: "创建时间",
      dataIndex: "createTime",
      hideInForm: true,
      search: false,
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle={"登录日志"}
        search={{
          labelWidth: 120,
        }}
        dataSource={[]}
        columns={columns}
      />
    </PageContainer>
  );
};

export default VisLog;
