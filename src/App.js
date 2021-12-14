import routerConfig from './router'
import React, { memo } from 'react'
import RouterView from './router/routerView'

const RouterViewPro = memo(RouterView)
function App() {
  return <div className="main">
    <RouterViewPro routerList={routerConfig.config} />
  </div>
}

export default App;
