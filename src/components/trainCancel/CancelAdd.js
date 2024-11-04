import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import firebase from '../../firebase/Firebase';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function CancelAdd() {
  const [id, setId] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [trainName, setTrainName] = useState('');
  const [trainType, setTrainType] = useState('');
  const [startStation, setStartStation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endStation, setEndStation] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Cancel');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function addData(newData) {
    ref
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  }

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="error"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New Cancellation
      </Button>
      <BootstrapDialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h2>Add New CANCELLATION</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            sx={{ m: 2, width: 200 }}
            disabled
            id="outlined-disabled"
            label="ID Auto Generated"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <TextField
            sx={{ m: 2, width: 200 }}
            id="outlined-basic"
            label="Train No"
            variant="outlined"
            value={trainNo}
            onChange={(e) => setTrainNo(e.target.value)}
          />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Train Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trainName}
              label="Train Name"
              onChange={(e) => setTrainName(e.target.value)}
            >
              <MenuItem value="12956">
                Jaipur - Mumbai Central Superfast Express (12956)
              </MenuItem>
              <MenuItem value="12989">
                Ajmer - Dadar Western Express (12989)
              </MenuItem>
              <MenuItem value="12979">
                Jaipur - Bandra Terminus Superfast Express (12979)
              </MenuItem>
              <MenuItem value="19707">
                Aravali Express (Jaipur - Bandra Terminus) (19707)
              </MenuItem>
              <MenuItem value="12995">
                Jaipur - Porbandar Express (12995)
              </MenuItem>
              <MenuItem value="22474">
                Bikaner - Bandra Terminus Superfast Express (22474)
              </MenuItem>
              <MenuItem value="22932">
                Jaipur - Ahmedabad Intercity Express (22932)
              </MenuItem>
              <MenuItem value="19717">
                Jaipur - Secunderabad Express (19717)
              </MenuItem>
              <MenuItem value="19420">
                Ajmer - Ahmedabad Intercity Express (19420)
              </MenuItem>
              <MenuItem value="17019">
                Jaipur - Hyderabad Weekly Express (17019)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Train Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trainType}
              label="Train Type"
              onChange={(e) => setTrainType(e.target.value)}
            >
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="Slow">Slow</MenuItem>
              <MenuItem value="Semi Express">Semi Express</MenuItem>
              <MenuItem value="Express">Express</MenuItem>
              <MenuItem value="Intercity">Intercity</MenuItem>
              <MenuItem value="Night Mail">Night Mail</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">Start Station</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={startStation}
              label="Start Station"
              onChange={(e) => setStartStation(e.target.value)}
            >
              <MenuItem value="Jaipur">Jaipur</MenuItem>
              <MenuItem value="Udaipur">Udaipur</MenuItem>
              <MenuItem value="Jodhpur">Jodhpur</MenuItem>
              <MenuItem value="Bikaner">Bikaner</MenuItem>
              <MenuItem value="Ajmer">Ajmer</MenuItem>
              <MenuItem value="Kota">Kota</MenuItem>
              <MenuItem value="Alwar">Alwar</MenuItem>
              <MenuItem value="Bhilwara">Bhilwara</MenuItem>
              <MenuItem value="Sikar">Sikar</MenuItem>
              <MenuItem value="Pali">Pali</MenuItem>
              <MenuItem value="Chittorgarh">Chittorgarh</MenuItem>
              <MenuItem value="Sri Ganganagar">Sri Ganganagar</MenuItem>
              <MenuItem value="Barmer">Barmer</MenuItem>
              <MenuItem value="Bundi">Bundi</MenuItem>
              <MenuItem value="Jaisalmer">Jaisalmer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 2, width: 200 }}
            id="time"
            label="Start Time"
            type="time"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-simple-select-label">End Station</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={endStation}
              label="End Station"
              onChange={(e) => setEndStation(e.target.value)}
            >
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              <MenuItem value="Surat">Surat</MenuItem>
              <MenuItem value="Vadodara">Vadodara</MenuItem>
              <MenuItem value="Rajkot">Rajkot</MenuItem>
              <MenuItem value="Bhavnagar">Bhavnagar</MenuItem>
              <MenuItem value="Jamnagar">Jamnagar</MenuItem>
              <MenuItem value="Junagadh">Junagadh</MenuItem>
              <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
              <MenuItem value="Anand">Anand</MenuItem>
              <MenuItem value="Mehsana">Mehsana</MenuItem>
              <MenuItem value="Navsari">Navsari</MenuItem>
              <MenuItem value="Morbi">Morbi</MenuItem>
              <MenuItem value="Vapi">Vapi</MenuItem>
              <MenuItem value="Palanpur">Palanpur</MenuItem>
              <MenuItem value="Bhuj">Bhuj</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            id="date"
            label="Date"
            type="date"
            sx={{ m: 2, width: 200 }}
            InputLabelProps={{
              shrink: true
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            sx={{ m: 2, width: 632 }}
            id="outlined-basic"
            label="Reason"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <br />
          <TextField
            sx={{ m: 2, width: 500 }}
            id="outlined-multiline-static"
            label="Notes"
            multiline
            rows={5}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => addData({
              id: uuidv4(),
              trainNo,
              trainName,
              trainType,
              startStation,
              startTime,
              endStation,
              date,
              reason,
              note,
              createdAt: new Date()
            })}
          >
            Save
          </Button>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
