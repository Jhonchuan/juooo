import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom"
import GuardRouter from "./GuardRouter"
export default class SwitchRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        this.props.router.map(v => (
                            <Route key={v.path} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
                        ))
                    }
                </Switch>
            </div>
        )
    }
}
