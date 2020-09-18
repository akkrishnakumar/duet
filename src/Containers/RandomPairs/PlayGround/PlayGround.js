import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from '../../../UI/SiteTheme';
import { pairsFrom, singleFrom } from './UniquePairs';
import GameControls from './GameControls/GameControls';
import TeamList from './TeamList';

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

  return (
    <Grid container spacing={10} justify="center" alignItems="center" className={classes.root}>
      <TeamList
        items={itemsInLeft}
        side={LEFT}
        handleCheckedToggle={handleCheckedToggle}
        handleIsChecked={isChecked}
      />

      <GameControls
        handleAllLeft={handleAllLeft}
        handleAllRight={handleAllRight}
        handleLeftToRight={handleLeftToRight}
        handleRightToLeft={handleRightToLeft}
        isAllRightDisabled={itemsInLeft.length === 0}
        isAllLeftDisabled={itemsInRight.length === 0}
        isLeftToRightDisabled={leftChecked.length < 2}
        isRightToLeftDisabled={rightChecked.length === 0}
      />

      <TeamList
        items={itemsInRight}
        side={RIGHT}
        handleCheckedToggle={handleCheckedToggle}
        handleIsChecked={isChecked}
      />
    </Grid>
  )

}
