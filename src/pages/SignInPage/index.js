import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@material-ui/core';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import useStyles from './styles.js';
import { useAuthenticate } from '../../contexts/UserContext';
import { ErrorAlert } from '../../components/Alerts';
import {  Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';

export default function SignInPage() {

  const classes = useStyles()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuthenticate();
  const { error } = useApp()

  const onSubmit = async () => {
     await signIn(email, password);        
  }

  return (
      <div className={classes.root}>
        <h1>Acessar conta</h1>
        <div className={classes.main}>
          <form noValidate>
            <RequiredTextField
              id={"email"}
              label={"Email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onClick={() => { }}
            />
            <RequiredTextField
              id={"password"}
              label={"Password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onClick={() => { }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar me"
            />
            <ErrorAlert message={error}/>
            <Button
              type="button"
              fullWidth
              disabled={email.length < 3 || password.length < 8 }
              className="submit-SignInPage"
              onClick={onSubmit}
            >
              Entrar
          </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Esqueceu sua senha?
              </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Não possui uma conta? Crie aqui!"}
                </Link>
              </Grid>
            </Grid>
          </form>          
        </div>
      </div>
  );
}