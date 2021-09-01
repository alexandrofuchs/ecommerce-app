import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserPage from '../../pages/UserPage';
import OrderPage from '../../pages/CheckoutPage';
import { useAuthenticate } from '../../contexts/UserContext';
import NotFoundPage from '../../pages/NotFoundPage';

export default function ProtectedRoutes() {
    return (   
        <Switch>
            <Route path="/user/:id" component={UserPage} />
            <Route path="/order" component={OrderPage} />  
            <Route path={'*'} component={NotFoundPage} />   
        </Switch> 
    )
}