import { CardActionArea, CardMedia, Grid } from "@mui/material";
import useMovies from "../api/apiMovieList";


export default function Movies() {
    const { movies } = useMovies();
    return (
        <Grid color={"primary"} container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 1 }} size={3}>
            {movies.map((movie) => (
                <Grid key={movie.id} container alignItems={"center"} justifyContent={"center"} display={"flex"}>
                    <CardActionArea sx={{ backgroundColor: "black" }}>
                        <CardMedia sx={{ backgroundColor: "black", height: 300, width: 200, }} image={movie.poster_path ? (`https://media.themoviedb.org/t/p/w440_and_h660_face` +
                            movie.poster_path) : ("no-image.jpg")}>

                        </CardMedia>
                    </CardActionArea>
                </Grid>
            ))}
        </Grid>
    );
}