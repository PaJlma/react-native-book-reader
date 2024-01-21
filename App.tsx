import { FC } from "react";
import { AppProps } from "./App.types";
import AppRouter from "@/AppRouter/AppRouter";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const App: FC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
