import React, { useState, useMemo, useCallback } from 'react';

// create context
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prevIsSidebarOpen => !prevIsSidebarOpen);
  }, []); // No dependencies needed here since it only uses setIsSidebarOpen

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []); // No dependencies needed here

  const value = useMemo(() => ({
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  }), [isSidebarOpen, toggleSidebar, closeSidebar]); // Include all dependencies

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
