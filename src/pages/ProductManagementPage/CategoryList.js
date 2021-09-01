import React, { useEffect, useState } from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Button,
    Divider,
    TextField,
} from '@material-ui/core';

import {
    Edit as EditIcon,
    Category as CategoryIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    Add as AddIcon,
    ViewList as ViewListIcon,
    ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';

import Api from '../../services/api';
import useStyles from './styles';
import ProductForm from '../../components/ProductForm';
import { useApp } from '../../contexts/AppContext';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { ErrorAlert, SucessAlert } from '../../components/Alerts';
import CategoryForm from '../../components/CategoryForm';

import ProductList from './ProductList';
import RegisterProduct from './RegisterProduct';

export default function CategoryList() {

    const classes = useStyles();

    const [error, setError] = useState("");
    const [sucess, setSucess] = useState("");

    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);

    const [selectedComponent, setSelectedComponent] = useState(null);

    const onBack = () => {
        setSelectedComponent(null);
    }

    const CategoryItem = ({ category }) => {

        const [edit, setEdit] = useState(false);

        const onEdit = () => {
            setEdit(!edit);
        }

        const onClickRegister = () => {
            setSelectedComponent(<RegisterProduct category={category} />)
        }

        const onClickView = () => {
            setSelectedComponent(<ProductList />)
        }

        const onClickSave = async () => {
            onEdit();
        }

        return (
            <>
                {
                    edit ?
                        <CategoryForm category={category}  onSave={onClickSave} />
                        :

                        <ListItem key={category.description}>
                            <ListItemText>{category.description}</ListItemText>
                            <Button onClick={onClickRegister} startIcon={<AddIcon />}>Cadastrar Produto</Button>
                            <Button aria-label="Produtos" onClick={onClickView} startIcon={<ViewListIcon />}> Listar Produtos</Button>
                            <Button onClick={onEdit} startIcon={<EditIcon />} />
                        </ListItem>
                }
                <Divider />
            </>
        )
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await Api.get('/categories');
            console.log(res);
            if (res.error) {
                console.log(res.error)
            } else {
                if (res.data) {
                    setCategories(res.data);
                }
            }
        }
        fetchCategories()
    }, [])

    return (
        <>
            {selectedComponent ?
                <>
                    <Button onClick={onBack} startIcon={<ArrowBackIcon/>}>Voltar</Button>
                    {selectedComponent}
                </>
                :
                categories ?
                    <List style={{ overflowY: 'auto' }}>
                        {
                            categories.map((c, i) => (
                                <CategoryItem key={i} category={c} />
                            ))
                        }
                    </List>
                    : null

            }


        </>
    );
}