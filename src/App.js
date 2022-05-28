import './App.css';
import Header from './components/Header/index'
import Nav from './components/Navbar/index'
import About  from './components/about'
import Separator from './components/Separator'
import Define from './components/Define';
import SeparatorImage from './components/SeparatorImage/index'
import Footer from './components/Footer';

function App() {
  return (
   <>
    <Header />
    <Nav />
    <About />
    <Separator />
    <Define />
    <SeparatorImage />
    <Footer />
   </>
  );
}

export default App;
