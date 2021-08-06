import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React from 'react';

export default function FoodItem({ meal }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/meal/${meal.idMeal}`}>
          <Button variant="primary">Learn More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
