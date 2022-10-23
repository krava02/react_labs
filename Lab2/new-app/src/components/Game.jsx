import * as React from 'react';
import Button from "@mui/material/Button";
import {useRef, useState} from "react";
import {TextField} from "@mui/material";

const Game = () => {
    const MyNumber = useRef(null);
    const [ourNumber, setOurNumber] = useState(0);
    const [info, setInfo] = useState(false);
    const [arr, setArr] = useState("");
    let MyArr = [];
    const [count, setCount] = useState(0);
    const [CheckNewGame, setCheckNewGame] = useState(false);

    function NewGame() {
        let random = Math.floor(Math.random() * 1000) + 1;
        setOurNumber(random);
        setInfo(true);
        setArr("");
        setCheckNewGame(true);
        setCount(0);
    }

    function Check() {
        if (Number(ourNumber) === Number(MyNumber.current.value)) {
            setArr("Good Job!");
            setCheckNewGame(false);

            MyArr = [];
        } else if (Number(ourNumber) < Number(MyNumber.current.value)) {
            setArr(`${arr}\n N < ${MyNumber.current.value}`);
            MyArr.push(`N < ${MyNumber.current.value}`);
        } else if (Number(ourNumber) > Number(MyNumber.current.value)) {
            setArr(`${arr}\n N > ${MyNumber.current.value}`);
            MyArr.push(`N > ${MyNumber.current.value}`);
        }
        setCount(count + 1);
        if (count === 9) {
            setArr('Game over!')
            setCheckNewGame(false);
        }
        MyNumber.current.value = '';
    }

    return (
        <>
        <h1>GAME</h1>
        <form>
            <Button variant="outlined" onClick={NewGame}><h1>New game</h1></Button>
            <TextField inputRef={MyNumber}  type="number" InputProps={{inputProps: {min: 1, max: 1000}}}
                       label="Your number" variant="outlined"/>
            <Button variant="outlined" disabled={!CheckNewGame} onClick={Check}><h1>Check</h1></Button>
            <div>
                <p>Information:</p>
                {
                    info
                        ? <>
                            <div>{arr}</div>
                            <div>Масив: {
                                MyArr.forEach((tt) => {
                                    <div>{tt}</div>
                                })
                            }</div>
                            <div>{ourNumber}</div>
                            <div>Attempts: {count}</div>
                        </>
                        : <div>Start</div>
                }
            </div>
        </form>
        </>
    );
}

export default Game;
