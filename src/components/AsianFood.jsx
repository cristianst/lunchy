import React from 'react';
import {
   Accordion,
 } from 'semantic-ui-react';

import { AsiaRestaurants } from '../data';

export const AsianFood = () => (
  <div>
    <p>
      We recommend these restaurant
      {' '}
      <span aria-label="ok-hand" role="img">
        👌
      </span>
    </p>
    <Accordion.Accordion panels={AsiaRestaurants} />
  </div>
);
