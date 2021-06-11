import { Modal } from 'antd';
import * as React from 'react';

interface IUpdateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const UpdateForm: React.FunctionComponent<IUpdateFormProps> = (props) => {
  const { modalVisible, onOk, onCancel } = props;

  return <Modal
    destroyOnClose
    title="修改配置"
    visible={modalVisible}
    onCancel={() => onCancel()}
    onOk={() => onOk()}
    width={900}
    footer={null}
  >
    {props.children}
  </Modal>;
};

export default UpdateForm;
