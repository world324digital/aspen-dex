import React from "react";
import metadata from "../metadata-individual.json";
import {NavLink} from 'react-router-dom';
import "../stylesheet/new-style.css";
import NavBar from '../Components/NavBar';
import SideNav from '../Components/SideNav'





function AllMomentsList(){
    
 
   const data = metadata.ids;
   
    
    
      return(
    
    <React.Fragment> 
        <div className="container-fluid">
            <div className="row justify-content-center">
                <SideNav/>
                <div className="container">
                    <div className="col-12 ml-md-5 ml-0">
                        <NavBar/>

                        <div className ="row justify-content-center">
                            {data.map(( moment, index) => ( //Deconstructs each cards
                                <div className="card__product--container col-lg-4 col-md-6 col-12"   key={index}>
                                    <NavLink to={`collectables/tokens/${moment.id}`} className="card__product--link">
                                        <div className="card__product col-12">
                                            <div className="card__product--img-container">
                                            
                                                <img src={moment.img} alt className="card__product--img" />
                                                    
                                            
                                            </div>
                                            <h4 className="card__product--heading col-12 text-center">{moment.name} </h4>
                                            <h4 className="card__product--heading col-12 text-center"> ID: {moment.id} </h4>

                                            <p className="card__product--text col-12 text-center">{moment.description}</p>
                                            
                                        </div>
                                    
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    

    </React.Fragment>
)}

export default AllMomentsList;