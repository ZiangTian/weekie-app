import { Modal } from 'antd';
import type { ModalProps } from 'antd';
import * as React from 'react';
import type { MutableRefObject } from 'react';
interface PropsType<T> extends Omit<ModalProps, 'onOk'> {
  onOk: (ref: MutableRefObject<T | undefined>) => void;
  initialImportance?: boolean;
  initialUrgency?: boolean;
}
function withModal<T = any>(modalProps?: ModalProps, slotProps?: any) {
  return function (Slot: React.FC<any>) {
    return (props?: PropsType<T>) => {
      const ref = React.useRef<T>();
      return (
        <div>
          <Modal
            wrapClassName="modal-wrap"
            okText="Commit"
            cancelButtonProps={{ shape: 'round' }}
            okButtonProps={{ shape: 'round' }}
            width={600}
            {...modalProps}
            {...props}
            onOk={() => props?.onOk?.(ref)}
          >
            <Slot {...slotProps} ref={ref} close={props?.onCancel} initialImportance={props?.initialImportance} initialUrgency={props?.initialUrgency}/>
          </Modal>
        </div>
      );
    };
  };
}
export default withModal;


