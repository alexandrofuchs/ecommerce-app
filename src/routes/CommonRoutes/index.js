import { Route, useRouteMatch} from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
import ProductPage from '../../pages/ProductPage';


export default function CommonRoutes() {

    let match = useRouteMatch();

    console.log(match)
    return (
        <>        
            <Route exact path={`${match.path}/`} component={HomePage} />            
            <Route path={`${match.path}/:id`} component={ProductPage} />
        </>
    )
}