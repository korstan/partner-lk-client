import React from 'react';
import 'components/Home/Modal/Modal.css';

const passPropsToModalForm = (modalForm, props) =>
  React.Children.map(modalForm, child =>
    React.cloneElement(child, {
      ...props,
    }),
  );

export default function HomeModal({
  show,
  children,
  modalProps,
}) {
  const modalClassName = show ? 'modal show-modal' : 'modal hide-modal';

  return (
    <div className={modalClassName}>
        {passPropsToModalForm(children, modalProps)}
    </div>
  );
}
