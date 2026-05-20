import './Information.css';

function Information() {
  return (
    <section className="information">
      <div className="container">
        <h2 className="section-title">Join Us</h2>
        
        <div className="info-content">
          <div className="info-block">
            <h3>Venue</h3>
            <p className="venue-name">Orchardleigh Estate</p>
            <p className="venue-address">
              Orchardleigh House<br />
              Orchardleigh Estate<br />
              Frome BA11 2PB
            </p>
          </div>
          
          <div className="info-block">
            <h3>Date</h3>
            <p className="date-info">November 16th</p>
          </div>
          
          <div className="info-block">
            <h3>Details</h3>
            <p>Rooms available at the venue</p>
            <p>Drinks until dawn</p>
            <p className="contact-info">
              For more information:<br />
              <a href="tel:07950742403">07950 742403</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
