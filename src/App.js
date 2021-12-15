import routerConfig from "./router";
import React, { memo } from "react";
import RouterView from "./router/routerView";
import { StoreProvider } from "../src/store/index.jsx";

const RouterViewPro = memo(RouterView);
function App() {
  return (
    <StoreProvider>
      <div className="main">
        <RouterViewPro routerList={routerConfig.config} />
      </div>
    </StoreProvider>
  );
}

export default App;
