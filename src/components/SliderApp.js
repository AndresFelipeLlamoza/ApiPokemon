import Carousel from 'react-bootstrap/Carousel';
import Imagenes from '../resources/Imagenes';
import './components.css'
function SliderApp() {
  return (
    <div className="sliderContainer">
        <Carousel >
        <Carousel.Item>
            <div className="imagen">
                <img
                className="d-block "
                style={{width: '70rem'}}
                src={Imagenes.sli1}
                alt="First slide"
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="imagen">
                <img
                className="d-block "
                style={{width: '70rem'}}
                src={Imagenes.sli2}
                alt="Second slide"
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="imagen">
                <img
                className="d-block "
                style={{width: '70rem'}}
                src={Imagenes.sli3}
                alt="Third slide"
                />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderApp;