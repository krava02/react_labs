import styles from '../index.css'
import {Link} from "react-router-dom";
import {Card, Typography, Button, ImageList} from '@mui/material';

export default function (props) {
    const {product} = props

    return (
        <Card>
            <ImageList>
                <img
                    className={styles.product_image}
                    src={product.thumbnail}
                    alt={product.title}
                    borderRadius='lg'
                />
            </ImageList>
            <Typography>{product.title}</Typography>
            <Typography>${product.price}</Typography>
            <Button>
                <Link to={`${product.id}`}>Купити</Link>
            </Button>
        </Card>
    )
}