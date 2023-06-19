import './App.css';
import Aboutme from './containers/aboutme/Aboutme';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Hero from './containers/hero/Hero';
import Portfolio from './containers/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
    <Hero/>
    <Aboutme/>
    <Portfolio/>
    <Footer/>

    </div>
  );
}

export default App;
