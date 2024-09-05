import React from 'react';

interface IPopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

function Popup({ open, children, setOpen }: IPopupProps) {
  return (
    <dialog
      style={{ height: '45vh', width: '30vw' }}
      title='Update Student Information'
      open={open}
    >
      <button onClick={() => setOpen(false)}>x</button>
      {children}
    </dialog>
  );
}

export default Popup;
