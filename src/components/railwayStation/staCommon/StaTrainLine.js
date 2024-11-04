import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '../../subCommon/SkeletonModel';
import StaStationListML from './StaStationListML';
import StaStationListCL from './StaStationListCL';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, mt: -3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function StaTrainLine() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="West Line" {...a11yProps(0)} />
        <Tab label="East Line" {...a11yProps(1)} />
        <Tab label="North Line" {...a11yProps(2)} />
        <Tab label="South Line" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StaStationListML />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StaStationListCL />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skeleton />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Skeleton />
      </TabPanel>
    </Box>
  );
}
