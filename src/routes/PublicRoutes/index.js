import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignInPage from '../../pages/SignInPage';
import SignUpPage from '../../pages/SignUpPage';
import NotFoundPage from '../../pages/NotFoundPage';

export default function PublicRoutes() {
    return (
        <Switch>      
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />   
            <Route path="/order" component={SignInPage} />  
            <Route path={'*'} component={NotFoundPage} />          
        </Switch>
    )
}