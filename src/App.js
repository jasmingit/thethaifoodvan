import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const privateEventForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdtS0eojOwpVfe79goNYxAqura2UXOKTgzMMYekHDC1Klc3Zg/viewform'
  return (
    <BrowserRouter>
    <div className="App">
     <div className="content">
      <Navbar />
      <Home />
      <a href={privateEventForm} className="formlink">form</a>
     </div>
     <Routes>
        <Route path="/home" element={Home}/>
        <Route path="/about" element={About}/>
     </Routes>
     </div>
     </BrowserRouter>
    
  )
}

export default App;
