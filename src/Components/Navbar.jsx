import { Height, Search, SearchOffRounded } from "@mui/icons-material";
import { AppBar, Box, Button, Container, createTheme, Divider, IconButton, InputBase, Paper, TextField, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import { NavLink, useLocation } from "react-router";
import useMovies from "../api/apiMovieList";
import { useState } from "react";



const links = [


]
const Authlinks = [
    { title: "Home", to: "/" },
    { title: "Movies", to: "/movies" },
    { title: "My List", to: "/mylist" },
    { title: "Login", to: "/login" },
    { title: "Error", to: "/errors" },



]


export default function Navbar() {
    const [query, setQuery] = useState("death");
    const { movies } = useMovies(query);


    return (


        <AppBar position="static" sx={{ backgroundColor: "black", p: 2 }}>
            <Toolbar sx={{ pl: 5, pr: 5, }} >
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: "1" }}>
                    <IconButton>
                        <Typography sx={{ display: { xs: 'none', sm: 'block' }, mr: 4, fontStyle: "inherit" }} variant="h6" component="div" color="white">MOVİE'S</Typography>
                    </IconButton>
                    <Paper

                        sx={{ p: '2px', display: 'flex', alignItems: 'center', width: 300, height: 40 }}
                    >

                        <InputBase

                            onChange={(e) => setQuery(e.target.value)}
                            sx={{ ml: 1, flex: 1, }}
                            placeholder="Search Movie
                            "
                            inputProps={{ 'aria-label': 'search movie' }}
                        /> <Divider sx={{ height: 30, m: .5 }} orientation="vertical" />
                        <span type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </span>

                        <MovieCreationTwoToneIcon />

                    </Paper>
                    {links.map((link) => (
                        <Button color="inherit" key={link.to} component={NavLink} to={link.to}>{link.title}</Button>
                    ))}

                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>

                    {Authlinks.map((link) => (
                        <Button variant="h5" color="inherit" key={link.to} component={NavLink} to={link.to}>{link.title}</Button>
                    ))}

                </Box>

            </Toolbar>
        </AppBar>

    );
}