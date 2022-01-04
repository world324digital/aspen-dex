import React from "react";
import { NavLink } from 'react-router-dom';
import "../stylesheet/new-style.css";
import NavBar from '../Components/NavBar';
import SideNav from '../Components/SideNav'
import thomas from '../images/thomasJeff.jpeg';
import metadata from "../metadata-individual.json";
import {useEffect} from 'react';

import alltokenmetadata from '../metadata-all-tokens'


export  const Product = ({match}) => {

    const {
        params: { tokenId },
    } = match;
   
      const data = alltokenmetadata;
      const tokenid = tokenId.toString()
      const newdata = alltokenmetadata[tokenid]
      console.log(newdata)
    
      

   
      const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    const formBtn = {
        
    }
    return (
        <section className="showcase" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-12 pl-5 pr-5">
                            <div className="col-12 product__img--container">
                                <img src={newdata.img} alt="product diagram" className="product__img" />
                            </div>
                            <p className="product__description">{newdata.description}</p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <p className="card__product--heading col-12">{newdata.name} </p>
                            <p className="card__product--text col-12">Link to metadata: {newdata.metadata}</p>
                            <p className="m-0 col-12">Last Sale Price</p>
                            <p className="m-0 col-12">$1.500</p>
                            <form className="mt-5">
                                <div class="form-group">
                                    <input className="form-control" id="exampleInputEmail1" placeholder="$0.00" />
                                    <button type="submit" className="buy-pack-btn">Place Bid</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Product;
