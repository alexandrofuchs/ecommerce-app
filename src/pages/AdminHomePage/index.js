import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles  from './styles';

import ProductManagement from '../ProductManagementPage';
import { Typography } from '@material-ui/core';

export default function AdminHomePage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerContainer}>
                    <Typography variant="h5" style={{textAlign: 'center'}}>
                        Opções
                    </Typography>
                    <Divider orientation="horizontal" style={{width:"100%"}}></Divider>
                    <List>
                        {['Produtos', 'Pedidos', 'Usuários'].map((text, index) => (
                            <>
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                                <Divider orientation="horizontal" style={{width:"100%"}}></Divider>
                            </>
                        ))}
                    </List>
                </div>                
            </div> 
            <Divider orientation="vertical"></Divider>         
            <main className={classes.content}>                
                <ProductManagement/>
            </main>
        </div>
    );
}