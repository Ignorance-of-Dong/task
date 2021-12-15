/*
 * @Author: zhangzheng
 * @Date: 2021-12-15 10:04:58
 * @LastEditors: zhangzheng
 * @LastEditTime: 2021-12-15 17:21:53
 * @Descripttion:
 */
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
      path: "/citySights",
      component: React.lazy(() => import("../views/CitySights")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    {
      path: "/sightsDetail",
      component: React.lazy(() => import("../views/SightsDetail")),
      exact: true,
      meta: {
        isGloblePlayer: false
      }
    },
    {
      path: "/survey",
      component: React.lazy(() => import("../views/Survey")),
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
