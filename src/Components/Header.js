import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import theme from '../UI/SiteTheme'
import Logo from '../UI/Logo/Logo';
import MenuBar from './MenuBar/MenuBar';
import { Avatar } from '@material-ui/core';
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

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography edge="start" variant="h6" className={classes.title}>
            <Logo />
          </Typography>
          <div className={classes.menu}>
            <MenuBar edge="end" color="inherit" />
            <Avatar edge="end" alt="Akhil Krishnakumar" src={Akhil} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header