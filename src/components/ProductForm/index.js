import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Card, Divider, Grid, Typography, Button, List, ListItemText } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 2,
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
    button: {
        margin: 2,
        width: '100%'
    },
    list: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

export default function ProductForm() {

    const classes = useStyles();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [categories, setCategories] = useState([])

    const addCategory = () => {
        setCategories([...categories, category]);
    }

    const removeCategory = (e) => {
        console.log(e.target.parentElement.id)
        let array = [...categories]; // make a separate copy of the array
        let index = array. indexOf(e.target.parentElement.id)
        console.log(index)
        if (index !== -1) {
          array.splice(index, 1);
          setCategories([...array]);
        }
    }

    return (
        <div>
            <Grid>
                <Typography variant="h6">Cadastrar Produto</Typography>
                <Divider />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="name" label="Nome" onChange={(event) => setName(event.target.value)} />
                    <TextField id="price" label="Preço" onChange={(event) => setPrice(event.target.value)} />
                    <TextField id="description" label="Descrição" onChange={(event) => setDescription(event.target.value)} />
                    <TextField id="category" label="Categoria" onChange={(event) => setCategory(event.target.value)} />
                    <Button
                        variant="contained"
                        color="default"
                        onClick={addCategory}
                        className={classes.button}
                        startIcon={<AddIcon />}
                    >

                    </Button>
                </form>
                {categories ?
                    (<List className={classes.list}>
                        {categories.map( (cat, index) => (
                            <>
                                {/* <ListItemText key={cat}>{cat}</ListItemText> */}
                                <Button
                                    id={cat} 
                                    key={index} 
                                    label={cat}
                                    onClick={removeCategory} 
                                    startIcon={<DeleteIcon />}
                                 >{`${cat}`}</Button>                            
                            </>

                        ))}
                    </List>) : null
                }

                <Divider />
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Salvar
                </Button>
            </Grid>
            <Divider orientation="vertical" />
            <Grid>
                <h1>Ola</h1>
            </Grid>
        </div>
    );
}