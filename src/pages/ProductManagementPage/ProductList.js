import React, { useEffect, useState } from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Button,
    Divider,
} from '@material-ui/core';

import {
    Edit as EditIcon,
    Category as CategoryIcon,
    ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';

import Api from '../../services/api';
import useStyles from './styles';
import ProductForm from '../../components/ProductForm';

export default function ProductList() {

    const classes = useStyles();

    const [selectedComponent, setSelectedComponent] = useState(null);

    const [products, setProducts] = useState(null);

    const [product, setProduct] = useState({
        id: null,
        url: "",
        name: "",
        price: "",
        description: ""
    })

    const onBack = () => {
        setSelectedComponent(null);
    }

    const ProductItem = ({ prod }) => {

        //setProduct(prod)

        const onClickSave = async () => {
            console.log(prod)
            // const res = await Api.put(`/products/${prod.id}`, {
            //     url: prod.url,
            //     name: prod.name,
            //     description: prod.description,
            //     price: `${prod.price}`,
            //     categories: prod.categories
            // })
            // console.log(res)            
        }

        const onEdit = () => {
            setSelectedComponent(<ProductForm product={prod} setProduct={setProduct} onSave={onClickSave} onClose={onBack} />)
        }

        // useEffect(() => {
        //     console.log(product)
        // }, [product])
     
        return (
            <>
                {
                    <ListItem key={prod.name}>
                        <ListItemText>{prod.name}</ListItemText>
                        <Button onClick={onEdit} startIcon={<EditIcon />} />
                    </ListItem>
                }
                <Divider />
            </>
        )
    }

    useEffect(() => {

        const fetchProducts = async () => {
            const res = await Api.get('/products');
            if (res.data) {
                setProducts(res.data.data)
            }
        }
        fetchProducts();
    }, [])

    return (
        <>
            {selectedComponent ?
                <>
                    {selectedComponent}
                </>
                :
                products ?
                    <List style={{ overflowY: 'auto' }}>
                        {
                            products.map(p => (
                                <ProductItem prod={p} />
                            ))
                        }
                    </List>
                    : null
            }
        </>
    );
}