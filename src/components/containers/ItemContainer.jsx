import React from 'react'
import ItemCount from './ItemCount'
import {Card} from 'react-bootstrap';

export default function ItemContainer() {
    return (

        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title> Card Title</Card.Title>
            <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis est sit omnis ipsa, vitae, 
                eveniet eum laborum aut magni rem libero pariatur assumenda deserunt unde minima! Laborum, quasi numquam?
            </Card.Text>
            <ItemCount stock={8} initial={1} />
        </Card.Body>
        </Card>
    )
};


