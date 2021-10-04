/* The following line can be included in your src/index.js or App.js file*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Header from './components/HeaderFooter/Header';
import Home from './components/Home/Home';
import Footer from './components/HeaderFooter/Footer';
import Contact from './components/Contact/Contact';

//Connected all the components with Routing.

function App() {
  return (
    <div>
       <Router>
             <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/courses">
             <Courses></Courses>
           </Route>
           <Route exact path="/about">
             <About></About>
           </Route>
           <Route exact path="/contact">
             <Contact></Contact>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
