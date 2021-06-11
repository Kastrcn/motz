import { Modal } from 'antd';
import * as React from 'react';

interface IUpdateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const UpdateForm: React.FunctionComponent<IUpdateFormProps> = (props) => {
  const { modalVisible, onCancel,onOk } = props;

  return   <Modal
  destroyOnClose
  title="编辑定时任务"
  visible={modalVisible}
  onCancel={() => onCancel()}
  onOk={()=>onOk()}
  width={900}
  
>
  {props.children}
</Modal>;
};

export default UpdateForm;
