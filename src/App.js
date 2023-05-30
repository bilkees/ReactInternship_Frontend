import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
//import Course from './pages/Course';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AdminView from './pages/AdminView';


import Course_View from './pages/Course_View';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Company from './pages/Company';
import AdminPage from './pages/AdminPage';
import Coursecreate from './pages/Coursecreate';
import SingleCourse from './pages/SingleCourse';
import ScrollUpArrow from './pages/ScrollUpArrow';
import ScrollUp from './pages/ScrollUp';
import IndividualCourse from './pages/IndividualCourse';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <CourseView/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Course_View/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
         <Route path='/dashboard' element={<AdminPage/>}></Route>  
         <Route path='/company' element={<Company/>}></Route> 
         <Route path='/create' element={<Coursecreate/>}></Route> 
         <Route path='/singlecourse' element={<SingleCourse/>}></Route>

         <Route path='/individualcourse' element={<IndividualCourse/>}></Route>
         {/* <Route path="/signin" element={<Signin />} /> */}
         {/* <Route path ='/register' element={<Register/>}/> */}
        </Routes>
        <ScrollUpArrow/>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
