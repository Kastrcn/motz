import { Modal } from 'antd';
import * as React from 'react';

interface ICreateFormProps {
  modalVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const { modalVisible, onOk,onCancel } = props;

  return   <Modal
  destroyOnClose
  title="新增定时任务"
  visible={modalVisible}
  onCancel={() => onCancel()}
  width={900}
  onOk={()=>onOk()}
  // footer={null}
>
  {props.children}
</Modal>;
};

export default CreateForm;
