import React, { lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
const TheLayout = React.lazy(() => import('../../containers/TheLayout'));
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
const admin = () => {
    return (
        <>
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route path="/" name="admin" render={props => <TheLayout {...props}/>} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        </>
    )
}

export default admin
