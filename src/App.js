// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './pages/About';

import Contact from './pages/Contact';
import Loginpage from './pages/Loginpage';
import Singuppage from './pages/Signuppage';
import Office from './pages/Office';
import Sapretpage from './pages/Sapretpage';

// // import Blogs from './pages/Seeds';


function App() {
  return (
   <>
   
  
   <Router>
          
           
           <Routes>
                 <Route exact path='/' element={< Home />} />
                 <Route exact path='/Aboutus' element={<About/>}/>
                 
                 <Route exact path='/Contactus' element={<Contact/>}/>
                 <Route exact path='/Loginpage' element={<Loginpage/>}/>
                 <Route exact path='/Signuppage' element={<Singuppage/>}/>
                 <Route exact path='/Office' element={<Office/>}/>
                 <Route exact path='/Sapretpage' element={<Sapretpage/>}/>

                 
          </Routes>
          
       </Router>
   </>
  );
}

export default App;
   