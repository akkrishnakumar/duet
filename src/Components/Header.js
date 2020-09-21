import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../UI/SiteTheme'
import Logo from '../UI/Logo/Logo';
import MenuBar from './MenuBar/MenuBar';
import { Avatar, Button, MenuItem, Menu } from '@material-ui/core';
import Akhil from '../assets/images/Akhil.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    display: 'flex',
    alignItems: 'center'
  }
}));


const Header = (props) => {
  const classes = useStyles(theme)
  const history = useHistory()
  const [anchorElement, setAnchorElement] = useState(null)

  const getUserName = () =>
    JSON.parse(sessionStorage.getItem("user")).name

  const loggedInUser = () =>
    <div>
      <Button style={{ color: "inherit" }}>Welcome, {getUserName()}</Button>
    </div>

  const onUserOptionsClose = () => setAnchorElement(null)

  const openUserOptions = (e) => setAnchorElement(e.currentTarget)

  const signOut = () => {
    sessionStorage.removeItem("user")
    history.push("/login")
  }

  const userMenu =
    <Menu
      anchorEl={anchorElement}
      keepMounted
      open={Boolean(anchorElement)}
      onClose={onUserOptionsClose}
    >
      <MenuItem onClick={signOut}>Sign Out</MenuItem>
    </Menu>

  const userAvatar =
    <>
      <Button onClick={openUserOptions}>
        <Avatar edge="end" alt="Akhil Krishnakumar" src={Akhil} />
      </Button>
      {userMenu}
    </>

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            <Logo />
          </Typography>

          <div className={classes.menu}>
            <MenuBar edge="end" color="inherit" />
            {loggedInUser()}
            {userAvatar}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header