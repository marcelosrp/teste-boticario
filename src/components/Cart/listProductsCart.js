import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStorage";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import './style.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductsList = () => {
  const { products, total } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <Container>
        <section className="table-products">
            {products.length === 0 ? (
                <h1>Seu carrinho está vazio</h1>
            ) : (
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Imagem</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Valor</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((item) => {
                            const { value, name, image } = item;
                            return (
                            <TableRow key={name}>
                                <TableCell align="center">
                                <img src={image} width="90" alt={name} />
                                </TableCell>
                                <TableCell align="center">{name}</TableCell>
                                <TableCell align="center">
                                R$ {parseFloat(value).toFixed(2)}
                                </TableCell>
                            </TableRow>
                            );
                        })}
                        <TableRow>
                            <TableCell colSpan="3" align="center">
                                Total: {parseFloat(total).toFixed(2)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </section>
    </Container>
  );
};

export default ProductsList;
