import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductList from '../../components/ProductList';
import ProductReview from '../../components/ProductReview';
import ProductDetails from '../../components/ProductDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProductPage() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
       <ProductDetails />
       <ProductReview />
    </div>
  );
}

