import Banner from './components/Banner';
import Information from './components/Information';
import Timeline from './components/Timeline';
import LocationMaps from './components/LocationMaps';
import RSVPForm from './components/RSVPForm';
import Privacy from './components/Privacy';
import './App.css';

function App() {
  return (
    <div className="app" id="top">
      <Banner />
      <Information />
      <Timeline />
      <LocationMaps />
      <RSVPForm />
      <div id="privacy">
        <Privacy />
      </div>
      <div className="bottombar-separator"></div>
    </div>
  );
}

export default App;
