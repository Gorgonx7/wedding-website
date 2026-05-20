import Banner from './components/Banner';
import Information from './components/Information';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Banner />
      <Information />
      <Gallery />
      <RSVPForm />
    </div>
  );
}

export default App;
