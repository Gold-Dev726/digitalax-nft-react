import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from "clsx"

function SimpleModal(props) {
  const { open, handleClose } = props;
  console.log(open)


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{ paper: "bg-black outline rounded-lg border-2 border-black px-3 w-485" }}
    >
      <p className="text-right text-gray-50 absolute r-2 cursor-pointer" onClick={() => handleClose()}>x</p>
      <DialogContent className="mt-2">
        <p className="text-gray-50 font-normal text-base font-inter text-center">
          Hey! Please make sure to SIGN IN to contribute!
        </p>
        <p className="text-gray-50 font-extrabold text-base font-inter text-center mt-6">
          We are currently in BETA and whitelisting designers!
        </p>
        <p className="text-gray-50 font-normal text-base font-inter text-center mt-6">
          If you would like to join the Global Designer Network and contribute to our on-chain open source libraries through Fractional Garment Ownership then please join our discord or telegram and reach out!
        </p>
        <p className="text-gray-50 font-extrabold text-base font-inter text-center mt-6">
          Join us on our mission as we storm the gates of the metaverse and enable the gatemakers for web3 fashion and beyond!
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default SimpleModal;
