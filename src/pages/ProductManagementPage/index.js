import React, { useState } from 'react';
import { 
    Button, Divider,
} from '@material-ui/core';
import useStyles from './styles';
import RegisterCategory from './RegisterCategory';
import CategoryList from './CategoryList';

export default function ProductManagement() {

    const classes = useStyles();

    const [selectedComponent, setSelectedComponent] = useState(null);

    const onClickRegisterCategory = () => {
        setSelectedComponent(<RegisterCategory />)
    }

    const onClickView = () => {
        setSelectedComponent(<CategoryList />)
    }

    return (
        <div className={classes.root}>      
            <main className={classes.content}>
                <Button className={classes.button} onClick={onClickRegisterCategory} variant="contained">Cadastrar Categoria</Button>                 
                <Button className={classes.button} onClick={onClickView} variant="contained">Ver Categorias e Produtos</Button>
                <Divider />
                { selectedComponent }
            </main>
        </div>
    );
}