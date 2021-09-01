import React  from 'react';
import {
    Button,
    Divider,
    ListItem,
    ListItemText,
    TextField,
} from '@material-ui/core';
import { useApp } from '../../contexts/AppContext';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ItemCart({ id, name, description, price, quantity }) {

    const { removeToCart } = useApp();

    const onRemoveToCart = () => {
        removeToCart(id);
    }

    return (
        <>
            <ListItem key={id} id={id} >
                <ListItemText  id={name} primary={name} />
                <ListItemText  id={price} primary={price} />
                <TextField
                    id="standard-number"
                    defaultValue={quantity}          
                    type="number"
                    InputProps={{
                    inputProps: { 
                        contentEditable: false,  
                        max: 10, min: 1
                    }}}
                    InputLabelProps={{
                        shrink: true,            
                    }}
                />
                <Button startIcon={<DeleteIcon />} onClick={onRemoveToCart} />
            </ListItem>
            <Divider />
        </>

    );
}
