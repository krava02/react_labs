import {Box, Button, TableCell, TableRow} from "@mui/material";
import {useState} from "react";

export default function RowItem(props) {
    let { name, price, min, changeTotalQuantity, changeTotalCost } = props;
    min = min || 0;
    const [count, setCount] = useState(min);

    const increment = () => {
        setCount(count + 1);
        changeTotalQuantity(1);
        changeTotalCost(price);
    }
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
            changeTotalQuantity(-1);
            changeTotalCost(-price);
        }
    }

    return (

        <TableRow>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="center">{price}</TableCell>
            <TableCell>
                <Box direction="row" align="center" justify="center">
                    <Button variant="outlined" onClick={decrement}>-</Button>
                    <h1>{count}</h1>
                    <Button variant="outlined" onClick={increment}>+</Button>
                </Box>
            </TableCell>
            <TableCell align="center">
                {count * price}
            </TableCell>
        </TableRow>
    )
}