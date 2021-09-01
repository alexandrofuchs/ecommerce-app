import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProductReview from '../../components/ProductReview';
import ProductDetails from '../../components/ProductDetails';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Api, { Api2 } from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',    
  },
}));

export default function ProductPage() {

  const classes = useStyles();

  const { id } = useParams();

    const [product, setProduct] = useState({
      name: "",
      price: "",
      description: "",      
  })
  
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
      const fetchProduct = async () => {
          const res = await Api.get(`/products/${id}`);

          if (res.data) {
              setProduct(res.data.data)
          }         
          
          const res2 = await Api2.get(`/evaluations/products/${id}`)

          console.log(res2.data.data)
          if (res2.data) {
            setReviews(res2.data.data)
          }         
        
      }
      fetchProduct()
  }, [id])
  

  useEffect( () => {
    console.log(reviews)
  },[reviews])

  return (
    <Paper className={classes.root}>
       <ProductDetails product={product} />
       <Divider/>
       <ProductReview reviews={reviews} />
    </Paper>
  );
}

