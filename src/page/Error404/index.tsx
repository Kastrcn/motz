import { Button, Result } from 'antd';
import * as React from 'react';

interface IError404Props {
}

const Error404: React.FunctionComponent<IError404Props> = (props) => {
  return <Result
    status="404"
    style={{
      height: '100%',
      background: '#fff',
    }}
    title="Hello World"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />;
};

export default Error404;
