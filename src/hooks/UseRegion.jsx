import {useState, useEffect} from 'react'

const UseRegion = () => {
	const [regions, setRegions] = useState([])

	useEffect (()=>{
		async function getRegions() {
			const list = await fetch (`https://pokeapi.co/api/v2/region/`)
			const data = await list.json()
			setRegions(data.results)
		}
		getRegions();
	},[])

	return{
		regions
	}
}

export default UseRegion;