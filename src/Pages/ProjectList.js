import "../App.css";
import {NavLink} from 'react-router-dom'


function ProjectList() {
  return (
<section className="container-fluid mt-5 mb-5">
  <div className="container">
    <div className="row mb-5">
      <ul className="nav col-12" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <b>
            <NavLink className="nav-link text-link active" id="all-tab" data-toggle="tab" to="#all" role="tab" aria-controls="all" aria-selected="true">All</NavLink>
          </b>
        </li>
        <li className="nav-item" role="presentation">
          <b>
            <NavLink className="nav-link text-link" id="web-tab" data-toggle="tab" to="#web" role="tab" aria-controls="web" aria-selected="false">Web</NavLink>
          </b>
        </li>
        <li className="nav-item" role="presentation">
          <b>
            <NavLink className="nav-link text-link" id="blockchain-tab" data-toggle="tab" to="#blockchain" role="tab" aria-controls="blockchain" aria-selected="false">Blockchain</NavLink>
          </b>
        </li>
        <li className="nav-item" role="presentation">
          <b>
            <NavLink className="nav-link text-link" id="mobile-tab" data-toggle="tab" to="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</NavLink>
          </b>
        </li>
      </ul>
      <div className="tab-content col-12" id="myTabContent">
        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--one col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--two col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--three col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--four col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--five col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--six col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--seven col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--eight col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--nine col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--ten col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--three col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="blockchain" role="tabpanel" aria-labelledby="blockchain-tab">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--one col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--two col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="mobile" role="tabpanel" aria-labelledby="mobile-tab">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--four col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--five col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--six col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--seven col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--eight col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--nine col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card__project card__project--ten col-12">
                <NavLink to="/crypto-punk" className="card__project--link">
                  <h3 className="card__project--title">Lorem</h3>
                  <div className="card__project--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default ProjectList;
