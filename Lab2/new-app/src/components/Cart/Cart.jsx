import {Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import RowItem from "./RowItem";

export default function Cart(props) {
    let {cart} = props;

    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const changeTotalQuantity = (quantity) => {
        setItemsQuantity(itemsQuantity + quantity);
    }

    const changeTotalCost = (price) => {
        setTotalCost(totalCost + price);
    }

    return (

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cart.map(({name, price, min, id}, index) => (
                    <RowItem key={id || index} name={name} price={price} min={min}
                             changeTotalQuantity={changeTotalQuantity}
                             changeTotalCost={changeTotalCost}/>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}>Totals</TableCell>
                    <TableCell align="center">{itemsQuantity}</TableCell>
                    <TableCell align="center">{totalCost}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>

    )
}
