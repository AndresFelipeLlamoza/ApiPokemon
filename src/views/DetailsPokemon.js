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
            <h1>Hola aqui van los detalles de {pokemon.name}</h1>
            <FooterApp/>    
        </div>
    )
}

export default DetailsPokemon;