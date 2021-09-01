import React, { useEffect, useState } from 'react';

import { 
    Divider, 
    Grid, 
    Button, 
    List,
    ListItemText,
    TextField
} from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { 
    Add as AddIcon,
    Delete as DeleteIcon,
    Cancel as CancelIcon,
} from '@material-ui/icons';

import useStyles from './styles';

export default function ProductForm({ product, setProduct, onSave, onClose }) {

    const classes = useStyles();

    return (
        <div>
            <Grid>
                <Divider />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="url" label="Imagem" defaultValue={product.url} onChange={(event) => setProduct({ ...product, url: event.target.value } )} />
                    <TextField id="name" label="Nome" defaultValue={product.name} onChange={(event) => setProduct({ ...product, name: event.target.value } )} />
                    <TextField id="price" label="Preço" defaultValue={product.price} onChange={(event) => setProduct({ ...product, price:  event.target.value } )} />
                    <TextField multiline={true} id="description"  defaultValue={product.description} label="Descrição" onChange={(event) => setProduct({ ...product, description: event.target.value})} />
                </form>
                <Divider />
                <div className={classes.actions}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CancelIcon />}
                    onClick={onClose}
                >
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    onClick={onSave}
                >
                    Salvar
                </Button>
                </div>                
            </Grid>
            <Divider orientation="vertical" />
  
        </div>
    );
}