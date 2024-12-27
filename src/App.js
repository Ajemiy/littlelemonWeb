import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ReservatonPage from './pages/ReservatonPage';
import NotFoundPage from './pages/NotFoundPage';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
    <Header/>
    {/* <div className='container'> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reservation' element={<ReservatonPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    {/* </div> */}
    <Footer/>
    </>
  );
}

export default App;



//"https://github.com/jrouwe/JoltPhysics.git"
//"https://github.com/dimforge/rapier.git"