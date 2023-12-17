// use
"use client";
// react
import React, { useState, createContext, useContext, ReactNode } from "react";

// interface
interface PortfolioState {
  isEdited: boolean;
  name: string;
  image: string;
  loading: boolean;
  setIsEdited: (value: boolean) => void;
  setName: (value: string) => void;
  setImage: (value: string) => void;
  setLoading: (value: boolean) => void;
}

// create context
export const PortfolioContext = createContext<PortfolioState | undefined>(
  undefined
);

// create provider component
export default function PortfolioContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // function to change value "isTrue"

  const contextValue = {
    isEdited,
    setIsEdited,
    name,
    setName,
    image,
    setImage,
    loading,
    setLoading,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolioContext must be used within a PortfolioContextProvider"
    );
  }
  return context;
}
