import { Redirect, Route, Switch } from 'react-router-dom';

import FoodSection from 'Components/FoodSection';
import React from 'react';
import SingleMeal from 'Components/SingleMeal';

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <FoodSection />} />
      <Route path="/meal/:id" render={() => <SingleMeal />} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
}
