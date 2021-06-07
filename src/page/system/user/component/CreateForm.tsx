import { Modal } from 'antd';
import * as React from 'react';

interface ICreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return   <Modal
  destroyOnClose
  title="用户增加"
  visible={modalVisible}
  onCancel={() => onCancel()}
  footer={null}
>
  {props.children}
</Modal>;
};

export default CreateForm;
