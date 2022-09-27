import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp';
import UsePokemon from '../hooks/UsePokemon';

function Pokemons() {

  const {pokemon, page, prev, next} = UsePokemon();
  console.log(pokemon);

  return (
    <div className='pokefondo'>
      <NavbarApp/>
        <h1 className="pokeTitulo">PokeDex</h1>
        <div className='containerPokemon'>
        {pokemon.map(data => (
            <Card style={{ width: '18rem', backgroundColor: '#FFE86D' }}>
              <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.url.split("/")[6]}.png`} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                 #{data.url.split("/")[6]}
                </Card.Text>
                <Button variant="primary">Mas informacion</Button>
              </Card.Body>
            </Card> 
        ))}
        </div>
        <div className='botonContador'>
          <button onClick={prev} className="botonAtras">Anterior</button>
          <center><h3>{page}</h3></center>
          <button onClick={next} className="botonSigueinte">Siguiente</button>
        </div>
        <FooterApp/>
        
    </div>
  )
}

export default Pokemons;