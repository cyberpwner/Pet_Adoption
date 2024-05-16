import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children }) {
  const ref = useRef(null);

  if (!ref?.current) {
    ref.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(ref?.current);

    // this will run when the component will unmount
    return () => {
      modalRoot.removeChild(ref?.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, ref?.current);
}

export default Modal;
