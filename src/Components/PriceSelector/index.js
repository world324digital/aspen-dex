import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './PriceSelector.css';

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 5,
    paddingTop: 20
  },
});

const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 10000,
      label: '$10,000+',
    },
];

function valuetext(value) {
  return `$${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
}