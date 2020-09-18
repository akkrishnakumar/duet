import React from 'react'
import { makeStyles, Paper, List, ListItemText, ListItemIcon, ListItem, Checkbox, Grid } from '@material-ui/core';
import theme from '../../../UI/SiteTheme';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  paper: {
    width: 300,
    height: 500,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}))

const TeamList = ({
  items,
  side,
  handleCheckedToggle,
  handleIsChecked
}) => {
  const classes = useStyles(theme)

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem key={value} role="listitem" button onClick={handleCheckedToggle(value, side)}>
                <ListItemIcon>
                  <Checkbox
                    checked={handleIsChecked(value, side)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    </Grid>

  )
}

export default TeamList