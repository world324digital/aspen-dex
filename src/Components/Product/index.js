import React from 'react'
import { NavLink } from 'react-router-dom';
import productImg from '../../images/american-pack-white-background.png';

const ProductItem = ({product}) => {
    return (
        <div className="card__product--container col-lg-4 col-md-6 col-12 col-sm-12">
            <NavLink to={`/collectables/tokens/${product.id}`} className="card__product--link">
                <div className="card__product col-12">
                    <div className="card__product--img-container">
                        <img src={product.img || productImg} alt="card product diagram" className="card__product--img" />
                    </div>
                    <p className="card__product--heading col-12 text-center">{product.name || ''} </p>
                    <p className="card__product--text col-12 text-center">{product.price || ''}</p>
                </div>
            </NavLink>
        </div>
    )
 }

export default ProductItem
