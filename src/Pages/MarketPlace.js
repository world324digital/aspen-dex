import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import { NavLink } from 'react-router-dom';
import product from '../images/american-pack-white-background.png';
import frenchrevolution from '../images/frenchrevolution.png';
import RussianRevolution from '../images/Russian-pack.png'
import philosophers from '../images/philosophers-pack.png'
import taiping from '../images/taiping-rebellion.png'
import cuban from '../images/cuban-revolution-pack.png'

function MarketPlace() {
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
                <h1 className="text-center">Upcoming Collection Drops</h1>
                <div className="row mt-4">
                    {
                        products.map(product => (
                            <div className="card__product--container col-md-4 col-6">
                                <NavLink to="/MarketDetails" className="card__product--link">
                                    <div className="card__product col-12">
                                        <div className="card__product--img-container">
                                            <img src={product.img} alt="card product diagram" className="card__product--img" />
                                        </div>
                                        <h4 className="card__product--heading col-12 text-center">{product.name || ''} </h4>
                                        <p className="card__product--text col-12 text-center">{product.description || ''}</p>
                                        <p className="card__product--text col-12 text-center">{product.price || ''}</p>

                                        <p className="card__product--price col-12 text-center">{product.releaseDate || ''}</p>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default MarketPlace;