import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonBase,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../services/api';
import { useApp } from '../../contexts/AppContext';
import ItemCart from '../ItemCart';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, RedirectProps, useLocation } from 'react-router-dom';



const useStyles = makeStyles({
    drawer:{
        width: 400,
    },
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
});

export default function CartMenu() {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const location = useLocation();

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(!state);
    };

    const { cart, removeToCart } = useApp();
    
    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }))(Badge);
      
      function CartIcon() {
        return (
          <IconButton aria-label="cart" onClick={toggleDrawer} >
            <StyledBadge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        );
      }

    const onRemoveToCart = () => {

    }

    const onCloseOrder = () => {
        if(Array.isArray(cart) && cart.length > 0){      
           window.location = '/order' 
        }
    }

    return (
        <>
            <CartIcon/>            
            <Drawer className={classes.drawer} open={state} onClose={toggleDrawer} anchor={'right'}>
                <div
                    className={classes.list}
                    onKeyDown={toggleDrawer}
                >
                    <h2>Carrinho</h2>
                    <Divider/>
                    <ListItem>
                        <ListItemText key={'name'} id={'name'} primary={"Nome"} />
                        <ListItemText key={'price'} id={'price'} primary={"Preço"} />
                        <ListItemText key={'quantity'} id={'quantity'} primary={"Quantidade"} />
                    </ListItem>
                    <Divider />
                    {cart ?
                        (<List>
                            {cart.map((prod) => (
                                <ItemCart key={prod.productId} id={prod.productId} name={prod.details.name} price={prod.details.price} quantity={prod.quantity} />
                            ))}
                        </List>) : null
                    }

                </div>                
                <Button onClick={onCloseOrder} >Fechar Pedido</Button>
            </Drawer>
        </>
    );
}
