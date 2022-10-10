import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp';
import UsePokemon from '../hooks/UsePokemon';
import {Link} from 'react-router-dom'

function Pokemons() {

  const {pokemon, page, prev, next} = UsePokemon();
  console.log(pokemon);

  return (
    <div className='pokefondo'>
      <NavbarApp/>
        <h1 className="pokeTitulo">PokeDex</h1>
        <div className='containerPokemon'>
        {pokemon.map(data => (
          
            <Card style={{ boxShadow: '5px 8px 7px rgb(0 0 0 / 0.5)',backgroundColor: '#FFE86D', textAlign: 'center', padding: '25px', borderRadius: '40px' }}>
              <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.url.split("/")[6]}.png`} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                 #{data.url.split("/")[6]}
                </Card.Text>
                <Link to={`/DetallesPokemon/${data.url.split("/")[6]}`}><Button variant="primary">Mas informacion</Button></Link>
              </Card.Body>
            </Card>
        ))}
        </div>
        <div className='botonContador'>
          <center><button onClick={prev} className="botonAtras">Anterior</button></center>
          <center><h3 style={{color: 'white'}}>{page}</h3></center>
          <center><button onClick={next} className="botonAtras">Siguiente</button></center>
        </div>
        <FooterApp/>
        
    </div>
  )
}

export default Pokemons;