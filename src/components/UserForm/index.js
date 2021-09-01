import React, { useState, useEffect } from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import './styles.css';
import PropTypes from 'prop-types';
import Api from '../../services/api';
import { ErrorAlert } from '../../components/Alerts';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { useAuthenticate } from '../../contexts/UserContext';

export default function UserForm({ user, setUser }) {

  const [error, setError] = useState(null);

  const { authenticatedUser } = useAuthenticate()

  const onClickSave = async () => {
    if (user.id) {
      const res = await Api.put(`/users/${user.id}`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        cpf: user.cpf
      })
      if (res.error) {
        setError(res.error)
      } 
    } else {
      const res = await Api.post(`/users`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        cpf: user.cpf
      })
      if (res.error) {
        console.log(res.error)
        setError(res.error)
      } 
    }
  }
  return (
      <ListItem>
        <form className="form-UserData" noValidate autoComplete="off">
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            {Array.isArray(error) ?
              error.map(e => <ErrorAlert message={` ${e} `} />) : null}
          </div>
          <RequiredTextField
            id={"firstName"}
            key={"firstName"}
            label={"Nome"}
            value={user.firstName}
            onChange={(event) => setUser({ ...user, firstName: event.target.value }) }
            onClick={() => { }}
          />
          <RequiredTextField
            id={"lastName"}
            key={"lastName"}
            label={"Sobrenome"}
            value={user.lastName}
            onChange={(event) => setUser({ ...user, lastName: event.target.value }) }
            onClick={() => { }}
          />
          <RequiredTextField
            id={"email"}
            key={"email"}
            label={"Email"}
            value={user.email}
            onChange={(event) => setUser({ ...user, email: event.target.value }) }
            onClick={() => { }}
          />
          <RequiredTextField
            id={"cpf"}
            key={"cpf"}
            label={"CPF"}
            value={user.cpf}
            onChange={(event) => setUser({ ...user, cpf: event.target.value }) }
            onClick={() => { }}
          />
          {
            !user.id ?
              (
                <>
                  <RequiredTextField
                    id={"password"}
                    key={"password"}
                    label={"Senha"}
                    value={user.cpf}
                    onChange={(event) => user.password = event.target.value}
                    onClick={() => { }}
                  /> 
                </>
              ) : null
          }
        </form>
      </ListItem>
  )
}
