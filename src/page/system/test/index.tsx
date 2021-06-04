import ProTable from '@ant-design/pro-table';
import { Switch } from 'antd';
import * as React from 'react';

interface ITestProps {
}

const Test: React.FunctionComponent<ITestProps> = (props) => {
  return <div>
      <Switch/>
      <ProTable/>
  </div>;
};

export default Test;
