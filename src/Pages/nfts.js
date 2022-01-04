import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    TextField, 
    MenuItem, 
    Select,
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Grid, 
    FormControlLabel, 
    Checkbox, 
    FormGroup 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

import "../stylesheet/new-style.css";

import product from '../images/american-pack-white-background.png';
import frenchrevolution from '../images/frenchrevolution.png';
import RussianRevolution from '../images/Russian-pack.png'
import philosophers from '../images/philosophers-pack.png'
import taiping from '../images/taiping-rebellion.png'

import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import ProductItem from '../Components/Product';
import PriceSelector from '../Components/PriceSelector';
import PaginationCustom from '../Components/Pagination';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function NftsPage() {
    const classes = useStyles();
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const products = [
        {
            name: 'American Revolutuion',
            img: product,
            description: '448 Packs',
            price: 'USD $149.00',
            releaseDate: '1 Moment per Pack'
        },
        {
            name: 'French Revolutuion',
            img: frenchrevolution,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'July 2021'
        },
        {
            name: 'Russian Revolutuion',
            img: RussianRevolution,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'August 2021'
        },
        {
            name: 'Philosophers',
            img: philosophers,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'Fall 2021'
        },
        {
            name: 'Taiping Rebellion',
            img: taiping,
            description: 'Pack Size TBD',
            price: 'Price TBD',
            releaseDate: 'Fall 2021'
        },
        {
            name: 'Demo Product',
            img: product,
            description: 'Demo Product Description',
            price: 'USD $4.00',
            releaseDate: 'Fall 2021'
        }
    ];

    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };

    return (
        <section className="showcase" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="row content-row">
                    <div className="col-9 col-md-9 col-sm-12 col-xs-12 select-type" style={{fontSize: 45}}>
                        <SearchIcon fontSize="inherit" />
                        <TextField placeholder="Search" type="search" inputProps={{style: {fontSize: 25}}} className="search-text" />
                    </div>
                    <div className="col-3 col-md-3 col-sm-12 col-xs-12 select-type">
                        <Select
                            value={type}
                            onChange={handleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="select-box" inputProps={{style: {fontSize: 25}}}
                        >
                            <MenuItem value="" disabled>
                                Select Type
                            </MenuItem>
                            <MenuItem value={1}>Best Match</MenuItem>
                            <MenuItem value={2}>All</MenuItem>
                            <MenuItem value={3}>Similar NFTs</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <p className="filter-text">FILTER BY</p>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon  />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            Collection
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                defaultChecked
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="collection 1"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="collection 2"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="collection 3"
                                    />
                            
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon  />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            Category
                            </AccordionSummary>
                            <AccordionDetails>
                            <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="Category 1"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="Category 2"
                                    />
                            
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <PriceSelector />
                    </div>
                    <div className="col-md-9 col-sm-12 col-xs-12">
                        <div className="row mt-4">
                            {
                                products.map(product => (
                                    <ProductItem product={product} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col-md-12">
                        <PaginationCustom count={10} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NftsPage;