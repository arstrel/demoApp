import 'styles/foodStyles.scss';

import Container from 'react-bootstrap/Container';
import FoodItem from 'Components/FoodItem';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

export default function FoodList() {
  const meals = useSelector((state) => state.meals.fullList);
  return (
    <Container fluid>
      <Row className="foodContainer">
        {meals.map((meal) => (
          <FoodItem key={meal.idMeal} meal={meal} />
        ))}
      </Row>
    </Container>
  );
}
