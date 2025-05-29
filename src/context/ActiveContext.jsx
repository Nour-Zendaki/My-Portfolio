import { createContext, useContext, useState } from 'react';

const ActiveContext = createContext({
  activeSection: '/',
  setActiveSection: () => {}
});

export const ActiveProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  
  return (
    <ActiveContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => useContext(ActiveContext);