import { useDispatch, useSelector } from 'react-redux';

import FoodList from 'Components/FoodList';
import React from 'react';
import { axiosInstance } from 'App';
import { setMealsFullList } from 'redux/mealsReducer';
import { useEffect } from 'react';

export default function FoodSection() {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.fullList);

  useEffect(() => {
    if (!meals?.length) {
      axiosInstance.get('/filter.php?a=Canadian').then((res) => {
        dispatch(setMealsFullList(res.data?.meals));
      });
    }
  }, [dispatch, meals.length]);

  return <FoodList />;
}
