import {useEffect, useState} from 'react'
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp'
import '../App.css'
import {useParams} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function DetailsPokemon(){
    const {url} = useParams();
    console.log(url)

    const [pokemon,setPokemon]=useState([])

    useEffect (()=>{
        getPokemonData();
    },[])

    async function getPokemonData(){
        const list = await fetch (`https://pokeapi.co/api/v2/pokemon/${url}`)
        const data = await list.json();
        setPokemon(data)
    }

    return(
        <div className='fondoDetalles'>
            <NavbarApp/>
            <FontAwesomeIcon icon="fa-regular fa-arrow-left-long" /><button className='botonRegresar' onClick={()=>window.history.go(-1)}>Volver a los pokemon</button>
            <h1 className='detallesTitulo'>{pokemon.name} N.º{url} </h1>
            <div className='contenedorDetalles'>
                <div className='cd1'>
                    <img className='detalleImagen' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url}.png`}></img>
                </div>
                <div className='cd2'>
                    <h2>Experiencia base: {pokemon.base_experience} </h2>
                    <br></br>
                    <h2>Altura: {pokemon.height}ft </h2>
                    <br></br>
                    <h2>Peso: {pokemon.weight}lbls </h2>
                    <br></br>
                    <h2>Orden: {pokemon.order} </h2>
                    
                </div>

                <div className='cd3'>
                <h4>Habilidades</h4>
                </div>

                <div className='cd4'>
                    <p>Aqui van a ir los demas detalles</p>
                </div>
            </div>
            <FooterApp/>    
        </div>
    )
}

export default DetailsPokemon;