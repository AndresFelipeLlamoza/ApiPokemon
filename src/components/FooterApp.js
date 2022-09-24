import React from 'react'
import Imagenes from '../resources/Imagenes'
import './components.css'

export default function FooterApp() {
  return (
    <footer className='contenidoFooter'>
        <div>
            <img className="logopoke" src={Imagenes.logofooter}></img>
        </div>
        <div className='objetoGrid'>
            <p>Diseñado y creado por: Andres Felipe Llamosa Pechene</p>
            <p>Creditos a: <a href="https://pokeapi.co/">PokeApi</a> | La fuente de informacion usada</p>
            </div>
        <div>
            <p style={{textAlign: 'center', padding: '50px'}} >&copy;2022 - 2023</p>
        </div>
    </footer>
  )
}
