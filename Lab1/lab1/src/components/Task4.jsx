import React, {useState} from "react";
import {Button, ListGroup, Card} from 'react-bootstrap';


const products = [
    {
        id: 1,
        title: 'Ароматизатор Dr.Markus Lucky Fresh Top Green Citrus',
        nprice: '80',
        oprice: '75',
        img: 'https://content2.rozetka.com.ua/goods/images/big/25047561.jpg',
        InStock: 'Є в наявності',
    },
    {
        id: 2,
        title: 'Ароматизатор Dr.Markus Lucky Top Cedar Wood',
        nprice: '81',
        oprice: '79',
        img: 'https://content1.rozetka.com.ua/goods/images/big/25048271.jpg',
        InStock: 'Є в наявності',
    },
    {
        id: 3,
        title: 'Мобільний телефон Apple iPhone 14 128GB Starlight ',
        nprice: '45000',
        oprice: null,
        img: 'https://content2.rozetka.com.ua/goods/images/big/284913536.jpg',
        InStock: null,
    },
    {
        id: 4,
        title: 'Смартфон Xiaomi Redmi 10C 4/128Gb Graphite Gray',
        nprice: '6500',
        oprice: null,
        img: 'https://content2.rozetka.com.ua/goods/images/big/270413479.jpg',
        InStock: 'Є в наявності',
    },
    {
        id: 5,
        title: 'Мобільний телефон Samsung Galaxy M13 4/128GB Deep Green',
        nprice: '10000',
        oprice: '9900',
        img: 'https://content2.rozetka.com.ua/goods/images/big/277025954.jpg',
        InStock: 'Є в наявності',
    },

]

const CardA = (props) => {
    return (
        <>

            <Card style={{width: '10rem'}}>
                <Card.Img variant="top" src={props.product.img}/>
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    {props.product.oprice
                        ? <div>
                            <Card.Text>
                                <small className="text-muted">
                                    <del>{props.product.oprice} ₴</del>
                                </small>
                            </Card.Text>
                            <Card.Text style={{color: 'red'}}>{props.product.nprice} ₴</Card.Text>
                        </div>
                        : <Card.Text>{props.product.nprice} ₴</Card.Text>
                    }
                    {
                        props.product.InStock
                            ? <small className="text-muted">{props.product.InStock}</small>
                            : <small className="text-muted"></small>
                    }
                </Card.Body>
            </Card>

        </>
    )
}

const AllCards = (props) => {

    const [showMore, setShowMore] = useState(false)

    const numberOfItems = showMore ? products.length : 3;
    return (
        <div className="card-group">
            {props.data.slice(0, numberOfItems).map((card) => <CardA key={card.id} product={card}></CardA>)}
            {showMore
                ? <button onClick={() => setShowMore()}>Показати менше</button>
                : <button onClick={() => setShowMore(true)}>Показати більше</button>
            }
        </div>
    )
}

const Task4 = () => {
    return (
        <>
            <h1>Task4</h1>
            <AllCards data={products}></AllCards>
        </>
    )
}

export default Task4;
