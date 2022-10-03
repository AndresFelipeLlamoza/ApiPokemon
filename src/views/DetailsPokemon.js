import {useEffect, useState} from 'react'
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp'
import {useParams} from 'react-router-dom'

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
        <div>
            <NavbarApp/>
            <h1 className='detallesTitulo'>{pokemon.name} N.º{url} </h1>
            <div className='contenedorDetalles'>
                <div className='cd1'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}></img>
                </div>
                <div className='cd2'>
                    <p>Experiencia base: {pokemon.base_experience} </p>
                    <p>Altura: {pokemon.height} </p>
                    <p>Peso: {pokemon.weight} </p>
                    <p>Orden: {pokemon.order} </p>
                    
                </div>

                <div className='cd3'>
                <h4>Habilidades</h4>
                </div>

                <div className='cd4'>
                    
                </div>
            </div>
            <FooterApp/>    
        </div>
    )
}

export default DetailsPokemon;