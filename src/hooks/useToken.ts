import { TokenContext } from "@/contexts/context-token";
import { useContext } from "react";

export default function(){
  const { tokenContext, setTokenContext} = useContext(TokenContext);

  return { tokenContext, setTokenContext};
}
