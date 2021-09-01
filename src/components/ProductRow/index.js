import React from 'react';
import {
  Button,
  Grid,
  Divider,
  Typography,
  FormControl,
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import useStyles from './styles';
import NumberFormat from 'react-number-format';

const imagePath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tFOpByFPJfQwGOa94wLJYESIaSgNxfS-GlVBJiMH1PTPTeyuO2IU2vDyxb6PPeFPREMTA0jK&usqp=CAc"

export default function ProductRow({ id, url, name, description, price }) {

  const classes = useStyles();

  const { addToCart } = useApp();

  const [quantity, setQuantity] = React.useState(1);

  const addItem = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }

  const onAddToCart = () => {
    addToCart(id, quantity, { name, description, price })
  }

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item>
        <img className={classes.img} src={url} />
      </Grid>
      <Link to={`product/${id}`} className={classes.item}>
        <Typography gutterBottom variant="h4">
          {name}
        </Typography>
       <h2>
        <NumberFormat value={price} displayType={'text'}  decimalSeparator="," thousandSeparator="." prefix={'R$'} allowLeadingZeros={true} fixedDecimalScale={true} />
       </h2>
      </Link>
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
        <Button
          color="primary"
          onClick={onAddToCart}
        >
          Adicionar ao Carrinho
        </Button>
      </FormControl>      
    </Grid>
    <Divider variant="fullWidth" style={{width:'100%'}}  />
    </>
  );
}
