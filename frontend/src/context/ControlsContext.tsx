import { createContext, useEffect, useState } from 'react';

interface IControlsProps {
  isUpdatingContent: boolean;
  toggleUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ControlsContext = createContext<IControlsProps>({
  isUpdatingContent: false,
  toggleUpdating: () => false,
});

export const ControlsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isUpdatingContent, toggleUpdating] = useState(false);

  return (
    <ControlsContext.Provider value={{ isUpdatingContent, toggleUpdating }}>
      {children}
    </ControlsContext.Provider>
  );
};
