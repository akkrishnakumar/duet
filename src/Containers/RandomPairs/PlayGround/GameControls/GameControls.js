import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
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

const GameControls = ({
  handleAllRight,
  isAllRightDisabled,
  handleAllLeft,
  isAllLeftDisabled,
  handleLeftToRight,
  isLeftToRightDisabled,
  handleRightToLeft,
  isRightToLeftDisabled
}) => {
  const classes = useStyles(theme)

  return (
    <Grid container direction="column" alignItems="center">
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleAllRight}
        disabled={isAllRightDisabled}
        aria-label="move all right"
      >
        Randomize
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleLeftToRight}
        disabled={isLeftToRightDisabled}
        aria-label="move selected right"
      >
        -&gt;
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleRightToLeft}
        disabled={isRightToLeftDisabled}
        aria-label="move selected left"
      >
        &lt;-
      </Button>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleAllLeft}
        disabled={isAllLeftDisabled}
        aria-label="move all to right"
      >
        Reset
      </Button>
    </Grid>
  )
}

export default GameControls