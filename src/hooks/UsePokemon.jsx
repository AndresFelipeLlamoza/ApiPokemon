import {useState, useEffect} from 'react'

const UsePokemon = () =>{

    const [pokemon,setPokemon]=useState([]);
    const [page,setPage]=useState(0);
    
    function prev(){
        if (page<=0){
            page(0)
        }else{
            setPage(page - 1)
        }
    }

    function next(){
        if (page>=57){
            page(57)
        }else{
            setPage(page + 1)
        }
    }

    useEffect(()=>{
        async function getData(){
            const list = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=21&offset=${page * 20} `)
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
