import { useLoaderData } from "react-router-dom";
import { Grid } from '@mui/material';
import Category from '../components/Category'

export default function () {
    const categories = useLoaderData();

    return (<Grid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>{
            categories.map((category) => (
                <Category category={category}/>
            ))
        }</Grid>
    )
}