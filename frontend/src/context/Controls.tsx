// import { createContext, useState } from 'react';

// interface ILoadingProps {
//   isUpdating: boolean;
//   toggleUpdating: {() => React.Dispatch<React.SetStateAction<boolean>>} | null;
// }

// export const ControlContext = createContext<ILoadingProps>({
//   isUpdating: false,
//   toggleUpdating: null,
// });

// export const LoadingProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isUpdating, toggleUpdating] = useState(false);

//   return (
//     <ControlContext.Provider value={{ isUpdating, toggleUpdating }}>
//       {children}
//     </ControlContext.Provider>
//   );
// };

import React from 'react';

function Controls() {
  return <div>Controls</div>;
}

export default Controls;
