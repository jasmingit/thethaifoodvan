import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';

function App() {

  const privateEventForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdtS0eojOwpVfe79goNYxAqura2UXOKTgzMMYekHDC1Klc3Zg/viewform'
  return (
    <div className="App">
     <div className="content">
      <Navbar />
      <Home />
      <a href={privateEventForm} className="formlink">form</a>
     </div>
    </div>
  );
}

export default App;
