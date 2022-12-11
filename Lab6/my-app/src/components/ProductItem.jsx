import styles from '../index.css';
import {Card, Button, ImageList, Typography} from '@mui/material';

export default function (props) {
    const {product} = props

    return (
        <Card
            direction={{base: 'column', sm: 'row'}}
            overflow='hidden'
            variant='outline'
        >

            {
                product.images.map((image) => (
                    <ImageList>
                        <img
                            src={image}
                            alt={`${product.title}-${image}`}
                            className={styles.product_image}
                        />
                    </ImageList>
                ))
            }
            <Card>
                <Typography>{product.title}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>Rating: {product.rating}/5</Typography>
                <Typography>In stock: {product.stock}</Typography>
                <Typography>${product.price}</Typography>
            </Card>
            <Button>
                Придбати
            </Button>
        </Card>
    )
}