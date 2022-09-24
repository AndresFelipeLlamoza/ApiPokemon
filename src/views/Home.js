import logo from '../logo.svg';
import '../App.css';
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp';
import CardsProps from '../components/CardsApp';
import SliderApp from '../components/SliderApp';
import Video from '../components/Video';

function App() {
  return (
    <div>
      <NavbarApp/>
      <SliderApp/>
      <Video/>
      <CardsProps/>
      <FooterApp/>
    </div>
  );
}

export default App;