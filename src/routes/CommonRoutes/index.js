import { Route, useRouteMatch} from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';

export default function CommonRoutes() {

    let match = useRouteMatch();

    console.log(match.path)

    return (
        <>        
            <Route exact path={`/`} component={HomePage} />            
            <Route path={`/product/:id`} component={ProductPage} />
        </>
    )
}