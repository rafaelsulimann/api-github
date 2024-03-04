import { Outlet } from "react-router-dom";
import { TokenProvider } from "./contexts/context-token";

export default function App() {
  return (
    <TokenProvider>
      <Outlet />;
    </TokenProvider>
  );
}
