import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHomePage from '../../pages/AdminHomePage';
import ProtectedRoutes from '../ProtectedRoutes';

export default function AdminRoutes() {
    return (
        <Switch>
            <Route path="/private/" component={AdminHomePage} />
            <Route path="/" component={ProtectedRoutes} />            
        </Switch>
    )
}
