import { AccessPayloadTokenDTO } from "@/models/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import * as authService from "../services/auth-service"

export type TokenContextType = {
  tokenContext: AccessPayloadTokenDTO | undefined;
  setTokenContext: React.Dispatch<React.SetStateAction<AccessPayloadTokenDTO | undefined>>
};

export const TokenContext = createContext({} as TokenContextType);

type Props = {
  children: ReactNode;
}

export function TokenProvider({children} : Props){
  const [tokenContext, setTokenContext] = useState<AccessPayloadTokenDTO>();
  useEffect(() => {
    if (authService.isAuthenticated()) {
      const tokenPayload = authService.getAccessTokenPayload();
      setTokenContext(tokenPayload);
    }
  }, []);

  return (
    <TokenContext.Provider value={{ tokenContext, setTokenContext }}>
      {children}
    </TokenContext.Provider>
  );
}
