import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useImperativeHandle } from 'react'

const Modal = React.forwardRef(({ children, buttonCaption }, ref) => {
    const dialog = useRef();
  
    useImperativeHandle(ref, () => ({
      open() {
        dialog.current.showModal();
      },
    }));
  
    return createPortal(
      <dialog className='rounded-4 p-4 ' ref={dialog}>
        {children}
        <form method="dialog">
          <button className='btn btn-secondary'>{buttonCaption}</button>
        </form>
      </dialog>,
      document.getElementById('modal-root')
    );
  });
  
  export default Modal;