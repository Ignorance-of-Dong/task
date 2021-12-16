import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Back from "../component/Back"

function RouterView(props) {
    let routers = props.routers ? props.routers : props.routerList
    const defaultRouter = <Route path="/" component={() => {
        return <Redirect to="/login" key={22}/>
    }} key={22} exact/>
    return (
        <HashRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {
                        routers.map((item, index) => {
                            const Comp = item.component
                            return <Route path={item.path} exact={item.exact} component={(routers) => {
                                return <>
                                    <Comp route={item.children} {...routers}></Comp>
                                    <Back {...routers}/>
                                </>
                            }} key={index}/>
                        }).concat(defaultRouter)
                    }
                </Switch>
            </Suspense>
        </HashRouter>
    )
}



export default RouterView