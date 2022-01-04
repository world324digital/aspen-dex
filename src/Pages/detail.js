import React from 'react';
import "../stylesheet/new-style.css";

import { makeStyles } from '@material-ui/core/styles';
import { 
    MenuItem, 
    Select, 
    TextField,
    Button,
    Box, 
    FormControl 
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PurchaseIcon from '@material-ui/icons/ShoppingBasketOutlined';

import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import americanRevolutions from '../american-revolution';

import productImage from '../images/american-pack-white-background.png';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const DetailPage = ({match}) => {
    const {
        params: { tokenId },
    } = match;

    const tokenid = tokenId.toString();
    const product = americanRevolutions[tokenid];

    const classes = useStyles();
    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };

    return (
        <section className="showcase" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="row content-row product-detail">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{fontSize: 45}}>
                        <img src={product.img || ''} alt="card product diagram" className="product-img" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="row content-row">
                            <div className="col-md-12">
                                <span className="badge badge-custom">Buy now</span>
                            </div>
                            <div className="col-md-12">
                                <h1 className="product-title">{product.name}</h1>
                            </div>
                            <div className="col-md-12">
                                <h4>{product.description}</h4>
                            </div>
                            <div className="col-md-6">
                                <p>{product.price || "$2000"}</p>
                            </div>
                            <div className="col-md-6">
                                <Box component="fieldset" mb={3} borderColor="transparent" className="box">
                                    <Rating name="read-only" value={50} readOnly />
                                </Box>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <TextField 
                                        value={quantity}
                                        onChange={handleChange}
                                        displayEmpty
                                        placeholder="Quantity"
                                        className={classes.selectEmpty}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    />
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button variant="outlined" size="large" className="btn-orange" startIcon={<PurchaseIcon />}>Make Bid</Button>
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <p className="text-center">Delivered via the Ethereum Blockchain</p>
                            </div>
                            <div className="col-md-12">
                                <FormControl variant="outlined" className={classes.formControl}>
                                <Button variant="outlined" size="large" >Fin in explore</Button>
                                </FormControl>
                            </div>
                            <div className="col-md-12">
                                <p className="text-center">Find NFTs and place bid via explorer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row content-row product-detail">
                    <div className="col-md-12">
                        <hr className="custom-divider"></hr>
                        <h3 className="product-under-text"><a>Click here</a> for list of nfts contained in the pack</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage;