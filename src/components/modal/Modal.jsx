import React from 'react';
import './Modal.css';

const passPropsToModalForm = (modalForm, props) =>
  React.Children.map(modalForm, child =>
    React.cloneElement(child, {
      handleClose: props.handleClose,
    }),
  );

export default function Modal({
  show,
  children,
  handleClose,
}) {
  const modalClassName = show ? 'modal show-modal' : 'modal hide-modal';

  return (
    <div className={modalClassName}>
      <section className="modal-content">
        {passPropsToModalForm(children, { handleClose })}
      </section>
    </div>
  );
}
