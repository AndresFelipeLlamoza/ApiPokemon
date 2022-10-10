import React from 'react'
import '../App.css'
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UseRegion from '../hooks/UseRegion'
import RegionsImagenes from '../hooks/RegionsImages'

function Regions() {
  const {regions, setRegions} = UseRegion();
  console.log(regions)

  return (
    <div className="regionsFondo">
        <NavbarApp/>
        <h1 className="tituloRegiones">Regiones</h1>
        <div className="contenedorRegiones">
        {regions.map(region => (
        <Card>
        <Card.Img variant="top" src={region.img} />
          <Card.Body>
            <Card.Title>{region.name}</Card.Title>
            <Card.Text>
              #{region.url.split("/")[6]}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        ))}
        </div>
        <FooterApp/>
    </div>
  )
}

export default Regions