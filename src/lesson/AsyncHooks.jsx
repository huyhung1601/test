import React, {useState, useEffect} from 'react'

function useGiphy (query) {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData (){
            try {
                setLoading(true)
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Oj9FuGEpmBnMBFkwnKY8rEWHGE1zlveV&q=${query}&limit=10&offset=0&rating=g&lang=en`)                
                const json = await response.json();                
                setResults(
                    json.data.map(item=>{
                        return item.images.preview.mp4
                    })
                )
            } finally  {
                setLoading(false)
            }
        }
        if (query !== '') {
            fetchData()
        }
               
    }, [query]);

    return [results, loading];
}

export default function AsyncHooks() {
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [results, loading] = useGiphy(query)    
    return (
        <div>
            <h1> Async React Hook</h1>
            <form action="submit" onSubmit={ (e) =>{
                e.preventDefault();
                setQuery(search);}
            }>
                <input 
                    placeholder='Search For Gifts' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <button type='submit'>Search</button>
            </form>
            <br />   
            {loading ? (
                <h1>Give Me Gifts</h1>
            ):(results.map(item=>(
                <video autoPlay loop key={item} src={item}></video>
            )))}   
            
        </div>
    )
}
