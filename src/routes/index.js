import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import AdminRoutes from './AdminRoutes';
import LoadingPage from '../pages/LoadingPage';
import { useAuthenticate } from '../contexts/UserContext';
import { useApp } from '../contexts/AppContext';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function Routes() {
    const { signed, isUserAdmin } = useAuthenticate();
    const { loading } = useApp();

    if (loading) {
        return <LoadingPage />
    }
    return (
        <BrowserRouter>
            <Header title="Shopping App" />
            <div className="Main"> 
                <Switch> 
                    <Route exact path={`/`} component={HomePage} /> 
                    <Route path={`/product/:id`} component={ProductPage} />
                    {signed ? (isUserAdmin ? <AdminRoutes /> : <ProtectedRoutes />) : <PublicRoutes />}
                                
                </Switch>
            </div>  
        </BrowserRouter>
    )
}

