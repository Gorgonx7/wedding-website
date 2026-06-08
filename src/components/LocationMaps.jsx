import { APIProvider, Map, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';
import './LocationMaps.css';

function LocationMaps() {
  // Venue coordinates - Orchardleigh House
  const venueLocation = { lat: 51.2139, lng: -2.3714 };
  
  // Bristol Airport coordinates
  const bristolAirport = { lat: 51.3827, lng: -2.7191 };
  
  // Nearby train stations
  const trainStations = [
    { id: 1, name: 'Frome', lat: 51.2308, lng: -2.3205 },
    { id: 2, name: 'Bath Spa', lat: 51.3781, lng: -2.3567 },
    { id: 3, name: 'Bruton', lat: 51.1115, lng: -2.4539 },
    { id: 4, name: 'Westbury', lat: 51.2598, lng: -2.1879 }
  ];
  
  // Recommended hotels from Bonita Information Pack
  const hotels = [
    { id: 1, name: 'George Hotel & Granary', lat: 51.2308, lng: -2.3205, location: 'Frome' },
    { id: 2, name: 'Eden Vale Farm', lat: 51.2450, lng: -2.4050, location: 'Mells' },
    { id: 3, name: 'Old Parsonage House', lat: 51.2380, lng: -2.4150, location: 'Whatley' },
    { id: 4, name: 'The Woolpack', lat: 51.2530, lng: -2.2950, location: 'Beckington' },
    { id: 5, name: 'The George Inn', lat: 51.2453, lng: -2.4223, location: 'Nunney' },
    { id: 6, name: 'Premier Inn Frome', lat: 51.2289, lng: -2.3164, location: 'Frome' },
    { id: 7, name: 'Homewood', lat: 51.3420, lng: -2.3150, location: 'Freshford' }
  ];

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return (
      <section className="location-maps">
        <div className="container">
          <h2 className="section-title">Location & Accommodation</h2>
          <div className="api-key-warning">
            <p>⚠️ Google Maps API key not configured</p>
            <p className="warning-detail">
              Please add your Google Maps API key to the .env file to display the maps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <section className="location-maps">
        <div className="container">
          <h2 className="section-title">Location & Accommodation</h2>
          
          <div className="maps-container">
            {/* Left Map - Wider view with venue and airports */}
            <div className="map-wrapper">
              <h3 className="map-title">Venue, Airports & Train Stations</h3>
              <Map
                className="google-map"
                defaultCenter={venueLocation}
                defaultZoom={10}
                mapId="left-map"
                gestureHandling="cooperative"
                disableDefaultUI={false}
                zoomControl={true}
                mapTypeControl={false}
                streetViewControl={false}
                fullscreenControl={true}
              >
                {/* Venue Marker - Red/Wedding Icon */}
                <AdvancedMarker
                  position={venueLocation}
                  title="Orchardleigh House"
                >
                  <div className="venue-marker">
                    <div className="venue-icon">💒</div>
                  </div>
                </AdvancedMarker>
                
                {/* Bristol Airport Marker */}
                <AdvancedMarker
                  position={bristolAirport}
                  title="Bristol Airport"
                >
                  <div className="airport-marker">
                    <div className="airport-icon">✈️</div>
                  </div>
                </AdvancedMarker>
                
                {/* Train Station Markers */}
                {trainStations.map((station) => (
                  <AdvancedMarker
                    key={station.id}
                    position={{ lat: station.lat, lng: station.lng }}
                    title={`${station.name} Station`}
                  >
                    <div className="train-marker">
                      <div className="train-icon">🚂</div>
                    </div>
                  </AdvancedMarker>
                ))}
              </Map>
            </div>

            {/* Right Map - Zoomed in view with venue and hotels */}
            <div className="map-wrapper">
              <h3 className="map-title">Nearby Hotels</h3>
              <Map
                className="google-map"
                defaultCenter={venueLocation}
                defaultZoom={13}
                mapId="right-map"
                gestureHandling="cooperative"
                disableDefaultUI={false}
                zoomControl={true}
                mapTypeControl={false}
                streetViewControl={false}
                fullscreenControl={true}
              >
                {/* Venue Marker - Red/Wedding Icon */}
                <AdvancedMarker
                  position={venueLocation}
                  title="Orchardleigh House"
                >
                  <div className="venue-marker">
                    <div className="venue-icon">💒</div>
                  </div>
                </AdvancedMarker>
                
                {/* Hotel Markers - Prominent Gold Icons */}
                {hotels.map((hotel) => (
                  <AdvancedMarker
                    key={hotel.id}
                    position={{ lat: hotel.lat, lng: hotel.lng }}
                    title={`${hotel.name} - ${hotel.location}`}
                  >
                    <div className="hotel-marker">
                      <div className="hotel-icon">🏨</div>
                      <div className="hotel-label">{hotel.name}</div>
                    </div>
                  </AdvancedMarker>
                ))}
              </Map>
            </div>
          </div>

          <div className="maps-info">
            <p className="venue-info">
              <strong>Venue:</strong> Orchardleigh House, Orchardleigh Estate, Frome BA11 2PB
            </p>
            <p className="travel-info">
              <strong>Nearest Airport:</strong> Bristol Airport (approximately 25 miles)
            </p>
            <p className="travel-info">
              <strong>Nearest Train Stations:</strong> Frome (3 miles), Bath Spa (12 miles), Bruton (8 miles), Westbury (12 miles)
            </p>
          </div>
        </div>
      </section>
    </APIProvider>
  );
}

export default LocationMaps;
