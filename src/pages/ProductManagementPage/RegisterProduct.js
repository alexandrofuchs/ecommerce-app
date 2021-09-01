import React, { useState, useEffect } from 'react';
import ProductForm from '../../components/ProductForm';
import Api from '../../services/api';
import useStyles from './styles';
import { ErrorAlert, SucessAlert } from '../../components/Alerts';
import { useApp } from '../../contexts/AppContext';

export default function RegisterProduct({ category }) {

    const [error, setError]= useState("");
    const [sucess, setSucess]= useState("");

    const [product, setProduct] = useState({
        id: null,
        url: "",
        name: "",
        description: "",
        price: "",
        categories: []
    });

    const onSave = async () => {
       
            const res = await Api.post('/products', {
                url: product.url,
                name: product.name,
                description: product.description,
                price: `${product.price}`,
                categories: product.categories
            })
            console.log(res)
            if(res.error){
                console.log(res.error)
                setSucess("")
                setError(res.error)
            }else{
                setSucess("Operação realizada com sucesso!")
                setError("")
            } 
        
    }

    useEffect(() => {
        if(category){
            setProduct({ ...product, categories: [ { description: category.description }] })
        }
    },[category])

    return (
        <>
            <h1>Cadastrar Produto { category.description ? `de ${category.description}` : null }</h1>
            <ErrorAlert message={error} />
            <SucessAlert message={sucess} />
            <ProductForm product={product} setProduct={setProduct} onSave={onSave} />
        </>
    );
}