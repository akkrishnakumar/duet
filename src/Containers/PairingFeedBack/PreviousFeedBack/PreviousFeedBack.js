import React from 'react'
import { loggedInUser } from '../../../Utils/UserUtils'
import Ratings from '../../../Components/Ratings/Ratings'
import {
  Typography, TableContainer, Paper,
  makeStyles, Table, TableHead,
  TableRow, TableCell, TableBody
} from '@material-ui/core'

import styles from './PreviousFeedBack.module.css'

const useStyles = makeStyles({
  table: {
    maxWidth: 500,
  },
  container: {
    maxWidth: 500
  }
});

const PreviousFeedBack = (props) => {

  const classes = useStyles()
  const previousPairs = loggedInUser()?.previousPairs

  const tableRow = (pair, index) =>
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{pair.name()}</TableCell>
      <TableCell><Ratings rating={pair.rating} readOnly /></TableCell>
    </TableRow>

  const ratingRows = () =>
    previousPairs?.length > 0 ?
      previousPairs.reverse().map(tableRow) :
      null

  const ratings = pairs =>
    pairs?.length === 0 ?
      <Typography>You have not paired yet. Go enjoy some pairing first and come back after.</Typography> :
      <div className={styles.FeedBack}>
        <TableContainer className={classes.container} component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ratings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ratingRows()}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

  return ratings(previousPairs)
}

export default PreviousFeedBack