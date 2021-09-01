import React, { useEffect, useState } from 'react';
import {
  CardActions,
  CardContent,
  Button,
  Grid,
} from '@material-ui/core';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { ErrorAlert } from '../../components/Alerts';
import Api from '../../services/api';
import useStyles from './styles.js';
import { useApp } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm';

export default function SignUpPage() {

  const classes = useStyles();

  const { error, setError, setLoading } = useApp();

  const [user, setUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    cpf: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState(null);

  const onSubmit = async () => {
    setLoading(true)

    const res = await Api.post('/users', { 
      firstName: user.firstName, 
      lastName: user.lastName, 
      email: user.email, 
      cpf: user.cpf,
      password: user.password, });

    console.log(res)

    if(res.error){
      setError(res.error)
    }
    setLoading(false);
  }

  return (
    <div className={classes.root}>
      <h1>Criar conta</h1>
      <CardContent className={classes.content}>
        <ErrorAlert message={error ? error : ""} />
        <UserForm user={user} setUser={setUser} />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          fullWidth
          variant="default"
          onClick={onSubmit}
        >
          Enviar
        </Button>
      </CardActions>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/signin" variant="body2">
            Já tem uma conta? Entrar
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}