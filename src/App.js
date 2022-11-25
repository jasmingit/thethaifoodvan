import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import BookUs from './routes/BookUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <div className="content">
        <Navbar />
      </div>

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bookus" element={<BookUs />}/>
     </Routes>

     </div>

     </BrowserRouter>
    
  )
}

export default App;
