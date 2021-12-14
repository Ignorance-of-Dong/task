import React from "react";
let routerConfig = {
  config: [
    {
      path: "/home",
      component: React.lazy(() => import("../views/Home")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    {
      path: "/login",
      component: React.lazy(() => import("../views/Login")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    {
      path: "/register",
      component: React.lazy(() => import("../views/Register")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    {
      path: "/perfectInfo",
      component: React.lazy(() => import("../views/PerfectInfo")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    
   
    {
      path: "/about",
      component: React.lazy(() => import("../views/About")),
      exact: false,
      meta: {
        isGloblePlayer: true
      }
    } 
  ]
};
export default routerConfig;