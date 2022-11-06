import './App.css';
import Virtualized from "./components/Virtualized";
import {useEffect, useState} from "react";

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then(
                (data) => {
                    let res = data.filter(word => word.title.split(' ').length < 8);
                    setPhotos(res);
                }
            )
    }, []);

    return (
        <Virtualized photos={photos}/>
    );
}

export default App;

