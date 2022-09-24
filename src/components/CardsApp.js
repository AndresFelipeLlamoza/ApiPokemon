import React from 'react';
import Imagenes from '../resources/Imagenes'
import CardsProps from '../hooks/CardsProps';
import './components.css'


const CardsContent = [
    {
        titulo: 'Pokemon y mucho mas',
        img: Imagenes.card1,
        texto: 'Aqui encontraras informacion sobre todos los pokemon de la franquicia y mas contenido'
    },
    {
        titulo: 'Bienvenido a mi pagina!',
        img: Imagenes.card2,
        texto: 'Accede a todo tipo de informacion sobre pokemon aqui, espero sea mi pagina de su agrado'
    },
    {
        titulo: 'Un mundo inmenso, lleno de misterios, lugares y criaturas muy amistosas',
        img: Imagenes.card3,
        texto: 'Toda la informacion sobre las regiones y lugares del mundo de pokemon la encontraras aqui'
    }
]

function CardsApp () {
    return(
        <div className='cardsContainer'>
            {CardsContent.map((card) => (
                <CardsProps titulo={card.titulo} img={card.img} texto={card.texto}/>
            ))}
        </div>
    );
}

export default CardsApp;