import {useState, useEffect} from 'react'

const UsePokemon = () =>{

    const [pokemon,setPokemon]=useState([]);
    const [page,setPage]=useState(1);
    
    function prev(){
        if (page<=1){
            page(1)
        }else{
            setPage(page - 1)
        }
    }

    function next(){
        if (page>=1153){
            page(1153)
        }else{
            setPage(page + 1)
        }
    }

    useEffect(()=>{
        async function getData(){
            const list = await fetch (`https://pokeapi.co/api/v2/pokemon/&offset=${page} `)
            const data = await list.json()
            setPokemon(data.results)
        }
        getData();
    }, [page])


    return{
        pokemon,
        page,
        prev,
        next
    }
}

export default UsePokemon;
