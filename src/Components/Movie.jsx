import { Card, CardActionArea, CardMedia } from "@mui/material";

export default function Movie() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia sx={{ height: 200, backgroundSize: "contain" }}>

                </CardMedia>
            </CardActionArea>
        </Card>
    );
}