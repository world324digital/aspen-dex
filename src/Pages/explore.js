import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    TextField, 
    MenuItem, 
    Select,
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    FormControlLabel, 
    Checkbox, 
    FormGroup 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

import "../stylesheet/new-style.css";

import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import ProductItem from '../Components/Product';
import PriceSelector from '../Components/PriceSelector';
import PaginationCustom from '../Components/Pagination';

import americanRevolutions from '../american-revolution';

import productImg from '../images/american-pack-white-background.png';
import frenchrevolution from '../images/frenchrevolution.png';
import RussianRevolution from '../images/Russian-pack.png'
import philosophers from '../images/philosophers-pack.png'
import taiping from '../images/taiping-rebellion.png'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function Explore() {
    const nftProducts = [
        {
            name: 'American Revolutuion',
            img: productImg,
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
            img: productImg,
            description: 'Demo Product Description',
            price: 'USD $4.00',
            releaseDate: 'Fall 2021'
        }
    ];

    const classes = useStyles();
    const countPerPage = 6;
    const [query, setQuery] = React.useState('');
    const [type, setType] = React.useState('1');
    const [page, setPage] = React.useState(1);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        filteredProducts = [];
        products = [];
    };

    const handlePageChange = (page) => {
        setPage(page);
    };

    var filteredProducts = [];

    var data = americanRevolutions;

    if (query != ''){
        var converted_query = query.toLowerCase();
        for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
            var name = americanRevolutions[ i + 1 ].name.toLowerCase();
            if (name.search(converted_query) != -1){
                filteredProducts.push({
                    ...americanRevolutions[ i + 1 ],
                    id: i + 1});
                // filteredProducts.push(americanRevolutions[ i + 1 ]);
            }
        }
    } else {
        for(var i = 0; i < Object.keys(americanRevolutions).length; i++){
            // filteredProducts.push(americanRevolutions[ i + 1 ]);
            filteredProducts.push({
                ...americanRevolutions[ i + 1 ],
                id: i + 1
            });
        }
    }

    var totalCount = Math.ceil(filteredProducts.length / countPerPage);

    var products = [];

    var lastIndex = 0;
    var startIndex = countPerPage * (page - 1)
    if (totalCount == page)
        lastIndex = filteredProducts.length;
    else
        lastIndex = countPerPage * page
    products = filteredProducts.slice(startIndex, lastIndex);

    console.log(totalCount);
    console.log(page);

    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };

    return (
        <section className="showcase explore" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="row content-row">
                    <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 select-type" style={{fontSize: 45}}>
                        <SearchIcon fontSize="inherit" />
                        <TextField placeholder="Search" type="search" inputProps={{style: {fontSize: 25}}} className="search-text" 
                            onChange={handleQueryChange}/>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12 select-type">
                        <Select
                            value={type}
                            onChange={handleTypeChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="select-box" inputProps={{style: {fontSize: 25}}}
                        >
                            <MenuItem value={1}>Price (High to Low)</MenuItem>
                            <MenuItem value={2}>Price (Low to High)</MenuItem>
                            <MenuItem value={3}>Newest</MenuItem>
                            <MenuItem value={4}>Oldest</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 left-sidebar">
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
                                        label="American Revolution"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="default"
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            />
                                        }
                                        label="NFTs"
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
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 right-sidebar">
                        <div className="row product-grid col-12">
                            {
                                products.length > 0 ?
                                products.map(product => (
                                    <ProductItem product={product}/>
                                )) : <div className="text-center" style={{width: '100%', paddingTop: '5%'}}><h3 style={{fontWeight: 100}}>No Products</h3></div>
                            }
                        </div>
                        <div className="row col-12">
                            {
                                products.length > 0 ?        
                                <div className="row content-row">
                                    <div className="col-md-12">
                                        <PaginationCustom count={totalCount} page={page} parentCallback={handlePageChange}/>
                                    </div>
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore;