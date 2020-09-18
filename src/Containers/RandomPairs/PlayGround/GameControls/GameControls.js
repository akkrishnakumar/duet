import React from 'react'
import { Grid } from '@material-ui/core'
import OutlinedBtn from './OutlinedButton'

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

  return (
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <OutlinedBtn
          handleOnClick={handleAllRight}
          handleDisabled={isAllRightDisabled}
          text="Randomize"
        />

        <OutlinedBtn
          handleOnClick={handleLeftToRight}
          handleDisabled={isLeftToRightDisabled}
          text="->"
        />

        <OutlinedBtn
          handleOnClick={handleRightToLeft}
          handleDisabled={isRightToLeftDisabled}
          text="<-"
        />

        <OutlinedBtn
          handleOnClick={handleAllLeft}
          handleDisabled={isAllLeftDisabled}
          text="Reset"
        />
      </Grid>
    </Grid>
  )
}

export default GameControls