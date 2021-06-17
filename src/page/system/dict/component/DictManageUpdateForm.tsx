import { Modal } from "antd";
import * as React from "react";

interface IUpdateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const UpdateForm: React.FunctionComponent<IUpdateFormProps> = (props) => {
  const { modalVisible, onOk, onCancel } = props;

  return (
    <Modal
      destroyOnClose
      title="修改字典类型"
      visible={modalVisible}
      onCancel={() => onCancel()}
      onOk={() => onOk()}
      width={900}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
