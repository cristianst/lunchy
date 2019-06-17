import React from 'react';
import PropTypes from 'prop-types';
import { withOrdersContext } from '../../context/withOrdersContext';
import RestaurantController from '../Restaurant/RestaurantController';

const Category = ({ name, restaurants }) => (
  <div>
    <p>
        We recommend these restaurants for
      {' '}
      {name}
      {' '}
      <span aria-label="ok-hand" role="img">
          👌
      </span>
    </p>
    <RestaurantController {...{ restaurants }} />
  </div>
  );

Category.propTypes = {
  name: PropTypes.string.isRequired,
  restaurants: PropTypes.array.isRequired
};

Category.displayName = 'Category';

export default withOrdersContext(Category);
