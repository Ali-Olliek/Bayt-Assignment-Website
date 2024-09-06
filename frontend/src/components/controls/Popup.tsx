import './popup.css';
import React from 'react';

interface IPopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

function Popup({ open, children, setOpen, title }: IPopupProps) {
  return (
    <div className='dialog-wrapper'>
      {open && (
        <div className='dialog-overlay' onClick={() => setOpen(false)}>
          <dialog className='pop-up' open>
            <div>
              <h4>{title}</h4>
              <button onClick={() => setOpen(false)}>x</button>
            </div>
            <hr />
            {children}
          </dialog>
        </div>
      )}
    </div>
  );
}

export default Popup;
