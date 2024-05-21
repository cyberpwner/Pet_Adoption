import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useTheme from '../contexts/ThemeContext/useTheme';

function Modal({ children }) {
  const ref = useRef(null);
  const { isDarkMode } = useTheme();

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

  return createPortal(
    <section
      className={classNames(
        'p-10 rounded-xl grid grid-cols-1 place-items-center',
        {
          'bg-lavender-blush': !isDarkMode,
          'bg-gunmetal text-white': isDarkMode,
        }
      )}
    >
      {children}
    </section>,
    ref?.current
  );
}

export default Modal;
