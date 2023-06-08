

import "./Extrasection.css"



const Extrasection = () => {
  
 

 
  return (
    <div>
      <section className="extra-section">
        <div className="extra-content">
          <h2 className="extra-heading">Explore Our Features</h2>
          <div className="extra-cards">
            <div className="extra-card">
              <div className="extra-card-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="extra-card-title">Feature 1</h3>
              <p className="extra-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="extra-card">
              <div className="extra-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="extra-card-title">Feature 2</h3>
              <p className="extra-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="extra-card">
              <div className="extra-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="extra-card-title">Feature 3</h3>
              <p className="extra-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extrasection;
