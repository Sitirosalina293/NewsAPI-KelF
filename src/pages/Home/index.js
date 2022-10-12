import React from "react";
import BigPict from "../../assets/images/big_img_1.jpg";

function Home() {
  return (
    // build card bootstrap
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img src={BigPict} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              {/* 2 button */}
              <a href="#" className="btn btn-primary">
                News page
              </a>
              <a href="#" className="btn btn-primary">
                save
              </a>
            </div>
          </div>
          <div className="card">
            <img src={BigPict} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              {/* 2 button */}
              <a href="#" className="btn btn-primary">
                News page
              </a>
              <a href="#" className="btn btn-primary">
                save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
