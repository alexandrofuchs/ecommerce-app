import React, { useEffect, useState } from 'react';
import {
    List,
    Divider,   
} from '@material-ui/core';
import UseStyles from './styles.js';
import { Link } from 'react-router-dom';
import Api from '../../services/api';
import ItemsList from '../../components/ItemsList';
import SideLeft from '../../components/SideLeft';
import ProductList from '../../components/ProductList/index.js';
import { useApp } from '../../contexts/AppContext/index.js';

export default function HomePage() {

    const classes = UseStyles();

    const [data, setData] = useState([{
        createdAt: "",
        fileName: "",
        filePath: "",
        id: "",
        section: null,
        sectionId: "",
        storagedFileName: "",
        updatedAt: "",
    }]); 

    const { category, setCategory } = useApp();
    
    return (
        <>
        <SideLeft/> 
        <Divider orientation="vertical" />           
            <div className={classes.root}>
                <h1>
                    Produtos {category ? `de ${category}` : null }
                </h1>
                <ProductList/>
        </div>
        </>
    );
}


