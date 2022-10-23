import Task1 from "./components/Task1";
import * as React from "react";
import Cart from "./components/Cart/Cart";
import Game from "./components/Game";


const limit = [
    {id: 1, initial: 6, min: -5, max: 10},
    {id: 2, initial: 5},
    {id: 3},
];

const cart = [
    {id: 1, name: "Constructor Lego", price: 300},
    {id: 2, name: "Train Station", price: 200},
    {id: 3, name: "Hot Wheels Track", price: 150},
];



function App() {
    return (
        <div>
            <div>
                {

                    limit.map(counter => <Task1 data={counter}/>)

                }
            </div>
            <div>

                <Cart cart={cart}/>)
            </div>
            <div>
                <Game/>
            </div>
        </div>


    );
}

export default App;
