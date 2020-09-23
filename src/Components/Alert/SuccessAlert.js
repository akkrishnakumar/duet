import React from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const SuccessAlert = ({
  open,
  onClose,
  children
}) =>
  <Snackbar
    open={open}
    autoHideDuration={5000}
    onClose={onClose}>
    <Alert severity="success">{children}</Alert>
  </Snackbar>

export default SuccessAlert