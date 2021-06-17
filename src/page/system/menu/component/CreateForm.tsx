import { Modal } from "antd";
import * as React from "react";

interface ICreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const { modalVisible, onOk, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="新增角色"
      visible={modalVisible}
      onCancel={() => onCancel()}
      onOk={() => onOk()}
      width={900}
      // footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
