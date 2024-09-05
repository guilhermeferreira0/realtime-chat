import { createContext, ReactNode, useState } from "react";
import { getUserLocalStorage, removeUserLocalStorage, setUserLocalStorage } from "./utils";
import { AuthContextProviderProps, UserProps } from "./types";

export const Context = createContext({} as AuthContextProviderProps);

export function AuthContextProvider({ children }: {children: ReactNode}) {
  const [authUser, setAuthUser] = useState(getUserLocalStorage());

  function setUserContext(user: UserProps) {
    setUserLocalStorage(user);
    setAuthUser(user);
  }

  function logoutUser() {
    removeUserLocalStorage();
    setAuthUser(null);
  }

  return (
    <Context.Provider value={{
      authUser,
      setUserContext,
      logoutUser
    }}>
      {children}
    </Context.Provider>
  );
}