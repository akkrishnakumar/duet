import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import theme from '../../../UI/SiteTheme';
import { pairsFrom, singleFrom } from './UniquePairs';

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
}));

// function not(a, b) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a, b) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

const addOrRemove = (master, candidate) => {
  const currIndex = master.indexOf(candidate);
  const newMaster = [...master];

  if (currIndex === -1) {
    newMaster.push(candidate);
  } else {
    newMaster.splice(currIndex, 1);
  }
  return newMaster
}

export default function PlayGround() {
  const classes = useStyles(theme);
  const LEFT = "left"
  const RIGHT = "right"
  const members = ['Professor', 'Tokyo', 'Rio', 'Denver', 'Moscow', 'Stockholm', 'Berlin', 'Nairobi', 'Palmero']

  const [itemsInLeft, setItemsInLeft] = useState(members);
  const [itemsInRight, setItemsInRight] = useState([]);
  const [leftChecked, setLeftChecked] = useState([])
  const [rightChecked, setRightChecked] = useState([])

  const handleCheckedToggle = (value, side = LEFT) =>
    _ => side === LEFT ?
      setLeftChecked(addOrRemove(leftChecked, value)) :
      setRightChecked(addOrRemove(rightChecked, value))

  const handleAllRight = () => {
    setItemsInRight([...itemsInRight, ...pairsFrom(itemsInLeft)]);
    setItemsInLeft([]);
    setLeftChecked([])
  };

  const handleAllLeft = () => {
    setItemsInLeft([...itemsInLeft, ...singleFrom(itemsInRight)])
    setItemsInRight([])
    setRightChecked([])
  }

  const handleRightToLeft = () => {
    setItemsInLeft([...itemsInLeft, ...singleFrom(rightChecked)])
    setItemsInRight(itemsInRight.filter(item => !rightChecked.some(right => right === item)))
    setRightChecked([])
  };

  const handleLeftToRight = () => {
    setItemsInRight([...itemsInRight, ...pairsFrom(leftChecked)]);
    setItemsInLeft(itemsInLeft.filter(item => !leftChecked.some(left => left === item)))
    setLeftChecked([])
  };

  const isChecked = (value, side) =>
    side === LEFT ? leftChecked.indexOf(value) !== -1 : rightChecked.indexOf(value) !== -1

  const customList = (items, side) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleCheckedToggle(value, side)}>
              <ListItemIcon>
                <Checkbox
                  checked={isChecked(value, side)}
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
  );

  return (
    <Grid container spacing={10} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(itemsInLeft, LEFT)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={itemsInLeft.length === 0}
            aria-label="move all right"
          >
            Let's Pair
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleLeftToRight}
            disabled={leftChecked.length < 2}
            aria-label="move selected right"
          >
            -&gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleRightToLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;-
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={itemsInRight.length === 0}
            aria-label="move all to right"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(itemsInRight, RIGHT)}</Grid>
    </Grid>
  );
}
