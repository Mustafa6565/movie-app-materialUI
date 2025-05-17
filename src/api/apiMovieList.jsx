import { useEffect, useState } from "react";

export default function useMovies(query) {
    const [movies, setMovies] = useState([])
    const api_key = 'ac49740ddc37dc86a61bfe5f6e73849e';


    useEffect(() => {

        async function getMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
                const data = await response.json();
                setMovies(data.results)
            } catch (err) {
                console.log(err.message)
            }
        }
        getMovies();

    }, [query])
    return { movies };
}