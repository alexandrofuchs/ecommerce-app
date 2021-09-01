import React from 'react';
import {
    Grid,
    FormControl,
    TextField,
    Typography, 
    Button,
} from '@material-ui/core';
import ImageStepper from '../ImageStepper';
import { useApp } from '../../contexts/AppContext';
import useStyles from './styles';

export default function ProductDetails({ product }) {

    const classes = useStyles();

    const [quantity, setQuantity] = React.useState(1);

    const addItem = () => {
      if (quantity < 10) {
        setQuantity(quantity + 1)
      }
    }
  
    const removeItem = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }

    const { addToCart } = useApp();

    const handleChange = (event) => {
      setQuantity(event.target.value);
    };
  
    const onAddToCart = () => {
      addToCart(product.id, quantity, { name: product.name, description: product.description, price: product.price })
    }

    return (
        <div className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ImageStepper url={product.url}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {product.description}
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid className={classes.right}>
                        <Grid item>
                            <Typography variant="subtitle1">{`R$ ${product.price}`}</Typography>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="standard-number"
                                    label="Quantidade"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.valueAsNumber)}
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                            contentEditable: false,
                                            max: 10, min: 1
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <Button color="primary" onClick={onAddToCart}>Adicionar ao Carrinho</Button>
                            </FormControl>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}