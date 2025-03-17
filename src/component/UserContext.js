// UserContext.js
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Retrieve user data from localStorage on initial load
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || null;
  const [userData, setUserData] = useState(storedUserData);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  // Define signOut inside UserProvider
  const signOut = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, signOut }}>
      {children}
    </UserContext.Provider>
  );
};