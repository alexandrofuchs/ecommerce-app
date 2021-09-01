import React, { useState, useEffect} from 'react';
import { ListItem, ListItemText, Button} from '@material-ui/core';
import './styles.css';
import PropTypes from 'prop-types';
import Api from '../../services/api';
import { ErrorAlert } from '../../components/Alerts';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import { useAuthenticate } from '../../contexts/UserContext';

export default function UserData({ user, setUser }) {
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);        
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);

     const [error, setError] = useState(null);

     const { authenticatedUser } = useAuthenticate()

    const handleEdit = () => {
        setEdit(!edit);
    }

    const onClickSave = async () => {
        const res = await Api.put(`/users/${user.Id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email
        })
        if(res.error){
            setError(res.error)
        }else{
            handleEdit()
            setUser(authenticatedUser)
        }        
    }

    useEffect(()=>{
    },[firstName, lastName,email])

    return (
        <div className="root-UserData">
            <ListItem className="listItem-UserData">
                {
                    edit ?
                        <form className="form-UserData" noValidate autoComplete="off">
                            <ErrorAlert message={error}/>
                            <RequiredTextField
                                id={"firstName"}
                                key={"firstName"}
                                label={"Nome"}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                onClick={() => { }}
                            />
                            <RequiredTextField
                                id={"lastName"}
                                key={"lastName"}
                                label={"Sobrenome"}
                                value={user.LastName}
                                onChange={(event) => setLastName(event.target.value)}
                                onClick={() => { }}
                            />
                            <RequiredTextField
                                id={"email"}
                                key={"email"}
                                label={"Email"}
                                value={user.Email}
                                onChange={(event) => setEmail(event.target.value)}
                                onClick={() => { }}
                            />               
                        </form> :
                        <>
                            <ListItemText key="firstName" className="listItemText-UserData" primary={"Nome: "} secondary={user.firstName} />                     
                            <ListItemText key="lastName" className="listItemText-UserData" primary={"Sobrenome: "} secondary={user.lastName} />
                            <ListItemText key="cpf" className="listItemText-UserData" primary={"CPF: "} secondary={user.cpf} />              
                            <ListItemText key="email" className="listItemText-UserData" primary={"Email: "} secondary={user.email} />
                        </>
                }
            </ListItem>
            {
                edit ? <Button variant="contained" onClick={onClickSave}>Salvar</Button> : <Button variant="contained" onClick={handleEdit}>Editar</Button>
            }

        </div>
    )
}

UserData.propTypes = {
    user: PropTypes.object.isRequired
}