import React from 'react'
import './Modal.css';

export default function Modal({show, children, handleClickEvent}) {
  const modalClassName = show ? 'modal show-modal' : 'modal hide-modal';

  return (
    <div className={ modalClassName } onClick={handleClickEvent}>
      <section className="modal-content">{children}</section>
    </div>
  );
}
