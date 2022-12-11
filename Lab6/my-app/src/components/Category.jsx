import {Link} from "react-router-dom";
import {Card, Button, Typography} from '@mui/material';

export default function (props) {
    const {category} = props

    return (
        <Card>
            <Typography>{category}</Typography>
            <Card>
                <Button><Link to={`${category}/products`}>Переглянути</Link></Button>
            </Card>
        </Card>
    )
}