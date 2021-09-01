import React, { useEffect, useState } from 'react';
import {
    Divider,
} from '@material-ui/core';
import useStyles from './styles.js';
import SideLeft from '../../components/SideLeft';
import ProductRow from '../../components/ProductRow';
import { useApp } from '../../contexts/AppContext/index.js';
import Api from '../../services/api';

export default function HomePage() {

    const classes = useStyles();

    const { category } = useApp();

    const [products, setProducts] = useState([]);
      
    useEffect(() => {

        const fetchProducts = async () => {

            if (category) {
                const res = await Api.get(`/products?category=${category}`);
                if (res.data) {
                    setProducts(res.data.data);
                }
            } else {
                const res = await Api.get('/products');
                if (res.data) {
                    setProducts(res.data.data);
                }
            }
        }

        fetchProducts();
    }, [category])

    return (
        <>
            {/* <SideLeft /> */}
            <Divider orientation="vertical" />
            <div className={classes.root}>            
                <h2> Produtos {category ? `de ${category}` : null} </h2>
                    {
                        products.map(product => {
                            return (
                                <ProductRow key={product.id} id={product.id} url={product.url} name={product.name} description={product.description} price={product.price} />
                            )
                        })
                    }  
                         
            </div>
        </>
    );
}


