import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import * as React from "react";

interface IAlipayProps {}

const Alipay: React.FunctionComponent<IAlipayProps> = (props) => {
  return (
    <PageContainer title={false}>
      <ProCard>
        <PageContainer
          title={false}
          header={{
            title: "支付体验区",
          }}
          content={
            <div>
              该体验区支持支付宝微信支付体验，在实际应用中根据您的业务进行调整{" "}
            </div>
          }
          extraContent={[
            <img
              data-v-3227dacf=""
              src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
              style={{ width: 155, marginRight: "20px" }}
            />,
          ]}
          tabList={[
            {
              tab: "支付宝",
              key: "1",
            },
            {
              tab: "微信",
              key: "2",
            },
          ]}
        >
          <ProCard direction="column" ghost gutter={[0, 16]}>
            <ProCard style={{ height: 200 }} />
            <ProCard gutter={16} ghost style={{ height: 200 }}>
              <ProCard colSpan={16} />
              <ProCard colSpan={8} />
            </ProCard>
          </ProCard>
        </PageContainer>
      </ProCard>
    </PageContainer>
  );
};

export default Alipay;
