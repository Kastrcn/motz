import ProCard from '@ant-design/pro-card';
import { Col, Divider, Row } from 'antd';
import * as React from 'react';

interface IMachineProps {
}

const Machine: React.FunctionComponent<IMachineProps> = (props) => {
    return <Row>
        <Col sm={24} md={12}>
            <ProCard title="系统信息" headerBordered>
                系统名称：	Linux
            <Divider />
            系统架构：	amd64
            <Divider />
系统版本：	3.10.0-957.5.1.el7.x86_64
<Divider />
主机名称：	iZ2zecrtiof5z1dkezlxwqZ
<Divider />
主机IP地址：	172.17.56.132
            </ProCard>
        </Col>
        <Col sm={24} md={12} className="pl-5">
            <ProCard title="Java信息" headerBordered>
                虚拟机名称：	OpenJDK 64-Bit Server VM
            <Divider />
虚拟机版本：	25.111-b14
<Divider />
虚拟机供应商：	Oracle Corporation
<Divider />
java名称：	OpenJDK Runtime Environment
<Divider />
java版本：	1.8.0_111-8u111-b14-2~bpo8+1-b14
    </ProCard>
        </Col>

<div className="w-full mt-4">
<ProCard title="JVM内存信息"  headerBordered>
            最大内存：	843 MB	可用内存：	599.05 MB
        <Divider />
总内存：	492 MB	已使用内存：	243.95 MB
<Divider />
空余内存：	248.05 MB	使用率：	49.58%

    </ProCard>
</div>
      
    </Row>;
};

export default Machine;
