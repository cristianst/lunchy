import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'semantic-ui-react';

export const Restaurant = ({
 menu, selectedDishes, onRemoveDish, onSelectDish
}) => (
  <List divided verticalAlign="middle">
    {menu.map(dish => (
      <List.Item key={dish._id}>
        <List.Content floated="right">
          {selectedDishes.find(selectedDish => selectedDish._id === dish._id) ? (
            <Button onClick={() => onSelectDish(dish)}>Remove</Button>
          ) : (
            <Button onClick={() => onRemoveDish(dish)}>Add</Button>
          )}
        </List.Content>
        <List.Content>
          <span>
            {dish.name}
-
            {dish.price}
          </span>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

Restaurant.propTypes = {
  menu: PropTypes.shape([{}]),
  selectedDishes: PropTypes.func.isRequired,
  onRemoveDish: PropTypes.func.isRequired,
  onSelectDish: PropTypes.func.isRequired
};

Restaurant.defaultProps = {
  menu: []
};
