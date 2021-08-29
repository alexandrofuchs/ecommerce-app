import React from 'react';
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthenticate } from '../../../contexts/UserContext';
import './styles.css';
export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { authenticatedUser, isUserAdmin, signOut } = useAuthenticate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const onSignOut = () => {
    handleClose();
    signOut();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar className="avatar-UserMenu">{authenticatedUser.firstName[0]}</Avatar>
        {authenticatedUser.firstName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to={`/user/${authenticatedUser.id}`}>Configurações do usuário</Link></MenuItem>
        { isUserAdmin ? <MenuItem onClick={handleClose}><Link to={`/private`}>Configurações de Administrador</Link></MenuItem> : null }
        <MenuItem onClick={onSignOut}>Sair</MenuItem>
      </Menu>
    </>
  );
}

