"use client";
import { createContext, useContext, useRef } from "react";
import { useInView } from "framer-motion";

// Create context
const ViewContext = createContext(null);

// Provider component
const ViewProvider = ({ children }) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <ViewContext.Provider value={{ ref, isView }}>
      {children}
    </ViewContext.Provider>
  );
};

// Hook to use the context
const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
};

export { ViewProvider, useView };
