import React, { Component, useEffect, useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import Api from '../../services/api';
import ProductRow from '../ProductRow';

export default function ProductList(){

    const [products, setProducts] = useState([]);
    
    
    // useEffect( () => {

    //     const fetchProducts = async () => {
    //         const res = await Api.get('/products');
    //         console.log(res);
    //         if(res.data){
    //             setProducts(res.data.data);
    //         }else{
    //             console.log(res)
    //         }
            
    //     }
    //     fetchProducts();
    // },[])

    const { category, setCategory } = useApp();

    useEffect(()=>{
        const fetchProducts = async () => {

            if(category){
                const res = await Api.get(`/products?category=${category}`);
                console.log(res.data)
                if(res.data){
                    setProducts(res.data.data);
                }
            }else{            
                const res = await Api.get('/products');
                if(res.data){
                    setProducts(res.data.data);
                }
            }
    
        }

        fetchProducts();
    },[category])
    

    return (
        <div className="main-content">
          {
            products.map(product => {
              return <ProductRow key={product.id} id={product.id} image={"https://images.unsplash.com/photo-1628304457639-3dd4ded74a8b"} name={product.name} description={product.description} price={product.price} />
            })
          }
        </div>
    );

}

