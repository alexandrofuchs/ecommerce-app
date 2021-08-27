import React, { useEffect, useState } from 'react';
import {
    List,
    Divider,   
} from '@material-ui/core';
import UseStyles from './styles.js';
import { Link } from 'react-router-dom';
import Api from '../../services/api';
import ItemsList from '../../components/ItemsList';
function HomePage() {

    const classes = UseStyles();

    const [data, setData] = useState([{
        createdAt: "",
        fileName: "",
        filePath: "",
        id: "",
        section: null,
        sectionId: "",
        storagedFileName: "",
        updatedAt: "",
    }]); 

    const [selectedCategory, setCategory] = useState(null); 

    const fetchVideos = async () => {
        const res = await Api.get('/videos');
        console.log(res);
        if(res.data){
            setData(res.data.data);
        }
    }

    useEffect(()=>{
        fetchVideos();
    },[])

    return (
   
            <div className={classes.root}>
                <h1>
                    Produtos {selectedCategory ? `de ${selectedCategory}` : null }
                </h1>
                <ItemsList />
        </div>
    );
}
export default HomePage

