import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
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
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2)
  }
}));

export default function TicAdd() {
  const [reference, setReference] = useState('');
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [train, setTrain] = useState('');
  const [clz, setClz] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [noOfSeats, setNoOfSeats] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [payment, setPayment] = useState('');
  const [open, setOpen] = React.useState(false);
  const ref = firebase.firestore().collection('Ticket');
  let price = 0;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function addData(newData) {
    ref
      .doc(newData.reference)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
    handleClose();
  }

  switch (clz) {
    case '1st class Reserved':
      price = 440;
      break;
    case '1st class Sleeper':
      price = 460;
      break;
    case '1st class Air-Conditioned':
      price = 500;
      break;
    case '1st class Observation Saloon':
      price = 600;
      break;
    case '2nd class Reserved':
      price = 250;
      break;
    case '2nd class Sleeperates':
      price = 270;
      break;
    case '3rd class Reserved':
      price = 140;
      break;
    case '3rd class Sleeperates':
      price = 160;
      break;
    default:
      break;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New Reservation
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
          <h2>Add New RESERVATION</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs>
              <TextField
                sx={{ m: 2, width: 300 }}
                disabled
                id="outlined-disabled"
                label="Reference Number Auto Generated"
                variant="outlined"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
              <br />
              <FormControl sx={{ m: 2, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Start Station
                </InputLabel>
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
              <FormControl sx={{ m: 2, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  End Station
                </InputLabel>
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
              <FormControl sx={{ m: 2, width: 300 }}>
                <InputLabel id="demo-simple-select-label">Train</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={train}
                  label="Train"
                  onChange={(e) => setTrain(e.target.value)}
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
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clz}
                  label="Class"
                  onChange={(e) => setClz(e.target.value)}
                >
                  <MenuItem value="1st class Reserved">
                    1st class Reserved
                  </MenuItem>
                  <MenuItem value="1st class Sleeper">
                    1st class Sleeper
                  </MenuItem>
                  <MenuItem value="1st class Air-Conditioned">
                    1st class Air-Conditioned
                  </MenuItem>
                  <MenuItem value="1st class Observation Saloon">
                    1st class Observation Saloon
                  </MenuItem>
                  <MenuItem value="2nd class Reserved">
                    2nd class Reserved
                  </MenuItem>
                  <MenuItem value="2nd class Sleeperates">
                    2nd class Sleeperates
                  </MenuItem>
                  <MenuItem value="3rd class Reserved">
                    3rd class Reserved
                  </MenuItem>
                  <MenuItem value="3rd class Sleeperates">
                    3rd class Sleeperates
                  </MenuItem>
                </Select>
              </FormControl>
              <br />
              <TextField
                sx={{ m: 2, width: 200 }}
                id="time"
                label="Time"
                type="time"
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
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
                type="number"
                label="No of Seats"
                sx={{ m: 2, width: 168 }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 25
                  }
                }}
                value={noOfSeats}
                onChange={(e) => setNoOfSeats(e.target.value)}
              />
              <br />
              <Container sx={{ my: 2 }}>
                <Table aria-label="customized table">
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Price per ticket
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {price}
                      <span>&nbsp;</span>
                      INR
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">No of Seats</StyledTableCell>
                    <StyledTableCell align="right">{noOfSeats}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell
                      align="left"
                      sx={{ fontWeight: 'bold', fontSize: 18 }}
                    >
                      Total
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ fontWeight: 'bold', fontSize: 18 }}
                    >
                      {price * noOfSeats}
                      <span>&nbsp;</span>
                      INR
                    </StyledTableCell>
                  </StyledTableRow>
                </Table>
              </Container>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
            <Grid item xs>
              <TextField
                sx={{ m: 2, width: 300 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                sx={{ m: 2, width: 300 }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <TextField
                sx={{ m: 2, width: 632 }}
                id="outlined-basic"
                label="NIC no / Passport no / Driving License no"
                variant="outlined"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
              <TextField
                sx={{ m: 2, width: 450 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                sx={{ m: 2, width: 300 }}
                id="outlined-start-adornment"
                label="Tel no"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  )
                }}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <br />
              <FormControl sx={{ m: 2, width: 200 }}>
                <InputLabel id="demo-simple-select-label">Payment</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={payment}
                  label="Payment"
                  onChange={(e) => setPayment(e.target.value)}
                >
                  <MenuItem value="Done">Done</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => addData({
              reference: uuidv4(),
              startStation,
              endStation,
              train,
              clz,
              time,
              date,
              noOfSeats,
              price,
              firstName,
              lastName,
              id,
              email,
              tel,
              payment,
              createdAt: new Date()
            })}
          >
            Make Reservation
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
