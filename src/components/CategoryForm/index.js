import React from 'react';

import {
    Button,
    TextField,
} from '@material-ui/core';

import { 
    Edit as EditIcon, 
    Category as CategoryIcon,
    Save as SaveIcon,
} from '@material-ui/icons';

import useStyles from './styles';

export default function CategoryForm({ category, setCategory, onSave }){

    const classes = useStyles()

    return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="description" 
                    label="Descrição"
                    defaultValue={category.description}
                    onChange={(event) => setCategory({ description: event.target.value } )} 
                />
                <Button
                    variant="contained"
                    color="default"
                    onClick={onSave}
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                </Button>
            </form>                
    )
}