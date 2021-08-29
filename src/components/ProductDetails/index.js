import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useParams } from 'react-router-dom';
import Api, { Api2 } from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: '80%'
    },
    image: {
        width: 250,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ProductDetails({ }) {

    const { id } = useParams(); 
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: ""
    })

    const classes = useStyles();

    useEffect(()=>{
        const fetchProduct = async () => {
            const res = await Api.get(`/products/${id}`);

            console.log(res)
            if(res.data){
                setProduct(res.data.data)
            }

            const res2 = await Api2.get(`/evaluations/products/${id}`);
            console.log(res2);

        }
        fetchProduct()
    },[id])

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                {product.description}
                                </Typography>      
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{`R$ ${product.price}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}