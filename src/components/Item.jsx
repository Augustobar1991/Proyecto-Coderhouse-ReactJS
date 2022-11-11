import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/item.css";

export default function Item({ item }) {
  return (
    <div className="bordeitem" key={item.id}>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="350" src={item.imagen} alt="llantas" />
        <CardContent>
          <Typography variant="h6" component="div">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {`Dimension: ${item.dimension}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Stock: ${item.stock}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`Precio: $${item.precio}`}
          </Typography>
        </CardContent>
        <div className='botoncomprar'>
          <Button variant="outlined">
            <Link to={"/item/" + item.id}>Ver detalles</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}