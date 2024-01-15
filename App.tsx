import { FC } from "react";
import { AppProps } from "./App.types";
import AppRouter from "@/AppRouter/AppRouter";

const App: FC<AppProps> = (props) => {
  return <AppRouter />;
};

export default App;
