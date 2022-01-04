import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './PaginationStyle.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded({count, parentCallback }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    parentCallback(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={count} shape="rounded" page={page} onChange={handleChange} />
    </div>
  );
}