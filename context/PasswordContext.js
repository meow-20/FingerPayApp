import React, { createContext, useContext, useState } from "react";

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);

  const validatePassword = (text) => {
    setPassword(text);
    setHasUppercase(/[A-Z]/.test(text));
    setHasLowercase(/[a-z]/.test(text));
    setHasNumber(/\d/.test(text));
    setHasSymbol(/[!@#$%^&*]/.test(text));
    setHasMinLength(text.length >= 8);
  };

  return (
    <PasswordContext.Provider
      value={{
        password,
        setPassword,
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSymbol,
        hasMinLength,
        validatePassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

// Custom hook for easy usage
export const usePassword = () => useContext(PasswordContext);
