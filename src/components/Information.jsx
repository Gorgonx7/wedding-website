import './Information.css';

function Information() {
  return (
    <section className="information">
      <div className="container">
        <div className="two-column-layout">
          <div className="left-column">
            {/* Day Before & Day Of Section */}
            <div className="info-section">
              <h3>The Day Before & Day Of</h3>
              <p>
                <strong>The Day Before:</strong> Join us for a meal at <em>The Peacock Restaurant</em>. 
                If you'd like to attend, please let the bride or groom know. 
                <strong className="important-note">Please note: it is not possible to stay at the venue the night before, 
                so please seek alternative accommodation.</strong>
              </p>
              <p>
                <strong>Wedding Day:</strong> Please arrive at <strong>11:00 AM</strong>. 
                The ceremony will begin at <strong>1:00 PM</strong> at <em>St Mary's Orchardleigh</em>.
              </p>
            </div>

            {/* Accommodation Section */}
            <div className="info-section">
              <h3>Accommodation</h3>
              <p>
                Guests are welcome to stay at <strong>Orchardleigh Estate</strong> on the wedding night. 
                A detailed price list is available for download below.
              </p>
              
              <h4>Check-in & Check-out</h4>
              <p>
                <strong>Check-in:</strong> 1:00 PM on the day of the wedding<br />
                <strong>Check-out:</strong> 10:00 AM
              </p>
              
              <h4>Room Facilities</h4>
              <p>
                All rooms include: Towels, Hairdryer, Iron & Ironing Board, Tea, Coffee, Sugar & UHT Milk
              </p>
              
              <h4>Lost Property</h4>
              <p>
                Please ensure you take all belongings home with you. Any items found are held for 4 weeks, 
                after which time they are donated to charity. Please note, Orchardleigh is unable to return items via post.
              </p>
              
              <h4>Bar Information</h4>
              <p>
                The bar accepts payment by <strong>cash or card</strong>. Bar tabs can be arranged by the wedding couple. 
                Bar opening hours are agreed with the couple.
              </p>
              
              <h4>Suggested Hotels</h4>
              <ul className="hotel-list">
                <li>
                  <strong>George Hotel & Granary</strong><br />
                  Frome, BA11 1AF<br />
                  <a href="tel:01373462584">01373 462584</a><br />
                  Distance from venue: 2.1 miles
                </li>
                <li>
                  <strong>Eden Vale Farm</strong><br />
                  BA11 6SN<br />
                  <a href="tel:01373830371">01373 830371</a><br />
                  Distance from venue: 3.4 miles
                </li>
                <li>
                  <strong>Old Parsonage House</strong><br />
                  BA11 6TG<br />
                  <a href="tel:01373830775">01373 830775</a><br />
                  Distance from venue: 3.5 miles
                </li>
                <li>
                  <strong>The Woolpack</strong><br />
                  BA11 6SP<br />
                  <a href="tel:01373831244">01373 831244</a><br />
                  Distance from venue: 3.7 miles
                </li>
                <li>
                  <strong>The George Inn</strong><br />
                  Nunney, BA11 4LW<br />
                  <a href="tel:01373836458">01373 836458</a><br />
                  Distance from venue: 5.5 miles
                </li>
                <li>
                  <strong>Premier Inn Frome</strong><br />
                  Frome, BA11 2LD<br />
                  <a href="tel:03337777269">0333 777 7269</a><br />
                  Distance from venue: 5.8 miles
                </li>
                <li>
                  <strong>Homewood</strong><br />
                  Freshford, BA2 7TB<br />
                  <a href="tel:01225580439">01225 580439</a><br />
                  Distance from venue: 6.2 miles
                </li>
              </ul>
            </div>

            {/* Pricing Section */}
            <div className="info-section">
              <h3>Pricing Information</h3>
              
              <h4>Bar Prices</h4>
              <p>
                <a href="/bar-prices.pdf" className="download-link" download>
                  Download Bar Price List (PDF)
                </a>
              </p>
              
              <h4>Room Prices</h4>
              <p>
                <a href="/room-prices.pdf" className="download-link" download>
                  Download Room Price List (PDF)
                </a>
              </p>
              <p>
                <a href="https://www.orchardleigh.net/orchardleigh-house-bedrooms" className="download-link" target="_blank" rel="noopener noreferrer">
                  View Orchardleigh House Bedrooms
                </a>
              </p>
            </div>

            {/* Travel Section */}
            <div className="info-section">
              <h3>Getting There</h3>
              
              <h4>Venue Address</h4>
              <p>
                <strong>Orchardleigh House</strong><br />
                Orchardleigh Estate<br />
                Frome, Somerset<br />
                BA11 2PB
              </p>
              
              <h4>By Air</h4>
              <p>
                The nearest airport is:
              </p>
              <ul>
                <li><strong>Bristol Airport</strong> - 25 miles (approx. 40 minutes by car)</li>
              </ul>
              
              <h4>By Train</h4>
              <p>
                For train travel, we recommend booking through <a href="https://www.thetrainline.com" target="_blank" rel="noopener noreferrer">Trainline</a>. 
                The nearest train stations are:
              </p>
              <ul>
                <li><strong>Frome Station</strong> - 3 miles (approx. 10 minutes by taxi)</li>
                <li><strong>Bath Spa Station</strong> - 12 miles (approx. 25 minutes by taxi)</li>
                <li><strong>Bruton Station</strong> - 8 miles (approx. 15 minutes by taxi)</li>
              </ul>
              
              <h4>By Car</h4>
              <p>
                Parking is available on-site at Orchardleigh Estate. Please use the postcode <strong>BA11 2PB</strong> for sat nav directions.
              </p>
            </div>

            {/* Taxi Services Section */}
            <div className="info-section">
              <h3>Taxi Services</h3>
              <p>
                Please pre-book any taxis well in advance to avoid disappointment on the day:
              </p>
              <ul className="contact-list">
                <li><strong>Rocket Taxis:</strong> <a href="tel:07510981528">07510 981528</a></li>
                <li><strong>Smile Taxis:</strong> <a href="tel:07931893636">07931 893636</a></li>
                <li><strong>Arrow Taxis:</strong> <a href="tel:07779004030">07779 004030</a></li>
                <li><strong>Mike's Cabs:</strong> <a href="tel:07966492079">07966 492079</a></li>
                <li><strong>Starline Taxis:</strong> <a href="tel:01373452222">01373 452222</a></li>
                <li><strong>Frome Taxis:</strong> <a href="tel:01373452211">01373 452211</a></li>
                <li><strong>V Cars (Bath):</strong> <a href="tel:01225464646">01225 464646</a></li>
              </ul>
            </div>

            {/* Parking & Arrival Section */}
            <div className="info-section">
              <h3>Parking & Arrival</h3>
              
              <h4>Directions</h4>
              <p>
                Enter <strong>BA11 2PB</strong> into your sat nav, which will bring you to the entrance of the estate. 
                Follow the drive for <strong>1.5 miles through the golf course</strong>. You will see Orchardleigh House on your right-hand side.
              </p>
              
              <h4>Parking Instructions</h4>
              <p>
                You are welcome to drop off your luggage at the front of the house, but please then park in the <strong>overflow car park</strong> which is 
                100m past the house (first turning on the right). This ensures the front of the house remains clear for wedding transport and photographs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="info-section contact-section">
              <h3>Contact Information</h3>
              <p className="contact-info">
                <strong>For more information:</strong><br />
                <a href="tel:07950742403">07950 742403</a>
              </p>
              <p className="contact-info">
                <strong>Peacock Restaurant</strong> (for dining the night before):<br />
                <a href="tel:01373454200">01373 454200</a>
              </p>
              <p className="contact-info">
                <strong>Orchardleigh Golf Club:</strong><br />
                <a href="tel:01373454200">01373 454200</a>
              </p>
            </div>
          </div>
          
          <div className="right-column">
            <div className="image-stack">
              <img src="/poland1.jpg" alt="Poland" className="stacked-image" />
              <img src="/edinburgher.jpg" alt="Edinburgh" className="stacked-image" />
              <img src="/poland2.jpg" alt="Poland" className="stacked-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
