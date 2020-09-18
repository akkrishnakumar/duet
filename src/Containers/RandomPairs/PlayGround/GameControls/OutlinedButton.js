import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import theme from '../../../../UI/SiteTheme';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    width: 300,
    height: 500,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

const OutlinedBtn = ({
  handleOnClick,
  handleDisabled,
  text
}) => {

  const classes = useStyles(theme)

  return (
    <Button
      variant="outlined"
      size="small"
      className={classes.button}
      onClick={handleOnClick}
      disabled={handleDisabled}
    >{text}
    </Button>
  )

}

export default OutlinedBtn