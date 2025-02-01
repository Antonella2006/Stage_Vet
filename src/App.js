import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Services from './components/Services';
import Animalerie from './components/Animalerie';
import Contact from './components/Contact';
import Equipe from './components/Equipe';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/Services" element={<Services/>}/> 
          <Route path="/Animalerie" element={<Animalerie/>}/> 
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Equipe" element={<Equipe/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;