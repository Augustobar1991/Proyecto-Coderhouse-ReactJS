import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextComponent';

export default function Cart() {
  const { cart, removeItem, clearCart, totalToPay, defaultUserData } = React.useContext(cartContext);
  const cartAux = [...cart];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      {cart.length ? (
        <>
        <section className="mb-4" id="contacto">
          <h2 className="contactop">PRODUCTOS SELECCIONADOS</h2>
          <div className="lineacontacto"></div>
          <h1 className="title-cart"></h1>

          <div className="table-ctn">
            <TableContainer sx={{ width: '50vw' }} component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Etiqueta</StyledTableCell>
                    <StyledTableCell align="right">Nombre</StyledTableCell>
                    <StyledTableCell align="right">Cantidad</StyledTableCell>
                    <StyledTableCell align="right">Precio unitario</StyledTableCell>
                    <StyledTableCell align="right">Importe</StyledTableCell>
                    <StyledTableCell align="right">Eliminar producto</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartAux.map((item) => (
                    <StyledTableRow key={item.name}>
                      <StyledTableCell component="th" scope="row">
                        <img className="cart-img" src={`${item.img}`} alt={item.name} />
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.name}</StyledTableCell>
                      <StyledTableCell align="right">{`${item.quantity} unidades`}</StyledTableCell>
                      <StyledTableCell align="right">{`$${item.price}`}</StyledTableCell>
                      <StyledTableCell align="right">{`$${item.price * item.quantity}`}</StyledTableCell>
                      <StyledTableCell align="right">
                        <Chip label="Eliminar" color="error" onClick={() => removeItem(item.id)} onDelete={() => removeItem(item.id)} deleteIcon={<DeleteIcon />} variant="outlined" />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={3}>
                      <b>Total a abonar</b>
                    </TableCell>
                    <TableCell align="right">
                      {cartAux.length ? (
                        <>
                          <b>${totalToPay}</b>
                        </>
                      ) : (
                        <>$0</>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="btn-container">
            <Button style={{ backgroundColor: '#009688', color: 'white' }} onClick={() => clearCart()}>
              VACIAR CARRITO
            </Button>
            <Button style={{ backgroundColor: 'purple', color: 'purple' }}>
              <Link style={{ color: 'white', textDecorationStyle: 'none' }} to="/checkout" onClick={() => defaultUserData()}>
                continuar
              </Link>
            </Button>
          </div>
          </section>
        </>
      ) : (
        <>
          <h2 className='agregar_carrito'>AGREGAR PRODUCTOS AL CARRITO</h2>
          <h3 className='agregar_carrito'>
            Nuesto catalogo: <Link to="/"> click aqui</Link>
          </h3>
        </>
      )}
    </>
  );
}
