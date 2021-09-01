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
    Save as SaveIcon,
} from '@material-ui/icons';

import Api from '../../services/api';
import useStyles from './styles';
import ProductForm from '../../components/ProductForm';
import { useApp } from '../../contexts/AppContext';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { ErrorAlert, SucessAlert } from '../../components/Alerts';
import CategoryForm from '../../components/CategoryForm';

export default function RegisterCategory() {
    const [error, setError] = useState("");
    const [sucess, setSucess] = useState("");

    const [category, setCategory] = useState({
        description: ""
    });

    const onSave = async () => {
        const res = await Api.post('/categories', {
            description: category.description,
        })
        console.log(res);
        if(res.error){
            console.log(res.error.message)
            setSucess("");
            setError(res.error.message)
        }else{
            setSucess("Realizado com Sucesso!");
            setError("");
        }               
    }
    
    const CategoryItem = ({ category }) => {

        const [edit, setEdit] = useState(false);

        const onEdit = () => {
            setEdit(!edit);
        }

        const onClickSave = async () => {
            onEdit();
        }
        return (
            <>
                {
                    edit ?
                        <CategoryForm category={category} onSave={onClickSave}/> 
                    :
                        <ListItem key={category.description}>
                            <ListItemText>{category.description}</ListItemText>
                            <Button aria-label="Categorias" onClick={onEdit} startIcon={<CategoryIcon />} />
                            <Button onClick={onEdit} startIcon={<EditIcon />} />
                        </ListItem>
                }
                <Divider />
            </>
        )
    }

    useEffect(()=>{
        console.log(category)
    },[category])

    return (
        <>
            <ErrorAlert message={error}/>
            <SucessAlert message={sucess} />
            <CategoryForm category={category} setCategory={setCategory} onSave={onSave}/>            
        </>
    );
}