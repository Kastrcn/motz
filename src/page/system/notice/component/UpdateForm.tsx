import { Modal } from "antd";
import * as React from "react";

interface IUpdateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const UpdateForm: React.FunctionComponent<IUpdateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="用户增加"
      visible={modalVisible}
      onCancel={() => onCancel()}
      width={900}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
