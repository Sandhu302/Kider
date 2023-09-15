import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Components/Header_Components/Home';
import About from './Components/Header_Components/About';
import Classes from './Components/Body_Components/Classes';
import Contect from './Components/Header_Components/Contect';
import Become_Teacher from './Components/Dropdown_Components/Become_Teacher';
import Make_Appointment from './Components/Dropdown_Components/Make_Appointment';
import Popular_Teachers from './Components/Dropdown_Components/Popular_Teachers';
import School_Facilities from './Components/Dropdown_Components/School_Facilities';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/become_teacher' element={<Become_Teacher/>}/>
        <Route path='/appointment' element={<Make_Appointment/>}/>
        <Route path='/popular_teachers' element={<Popular_Teachers/>}/>
        <Route path='/facilities' element={<School_Facilities/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
