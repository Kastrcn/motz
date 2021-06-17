import { Modal } from "antd";
import * as React from "react";

interface ICreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FunctionComponent<ICreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="文件信息详情"
      visible={modalVisible}
      onCancel={() => onCancel()}
      width={900}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
