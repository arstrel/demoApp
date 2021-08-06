import 'styles/foodStyles.scss';

import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import React from 'react';
import { axiosInstance } from 'App';
import { useParams } from 'react-router-dom';

export default function SingleMeal() {
  const [meal, setMeal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!Object.keys(meal).length) {
      axiosInstance.get(`/lookup.php?i=${id}`).then((res) => {
        const list = res.data?.meals || [];
        setMeal(list[0]);
      });
    }
  }, [id, meal]);

  const {
    strInstructions,
    strArea,
    strCategory,
    strMeal,
    strYoutube,
    strMealThumb,
  } = meal;

  return (
    <div className="singleMealContainer">
      <p>{strMeal}</p>
      <p>{strArea}</p>
      <p>{strCategory}</p>
      <br />
      <Image src={strMealThumb} rounded />
      <br />
      <a href={strYoutube} className="youtubeLink">
        Watch on Youtube{' '}
      </a>
      <p>{strInstructions}</p>
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
    </div>
  );
}
