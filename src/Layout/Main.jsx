import { Container } from "@mui/material";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

export default function Main() {
    return (
        <>
            <Navbar />
            <Container sx={{ mt: 3, backgroundColor: "gray" }}>
                <Outlet />
            </Container></>
    )
}