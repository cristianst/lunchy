import React from 'react';

import { Button, List } from 'semantic-ui-react';

import { menus } from '../../data';

export const AsiaUnique = ({ selectedProducts, onSelectProduct, onRemoveProduct }) => (
  <List divided verticalAlign="middle">
    {menus.AsiaUnique.dishes.map(dish => (
      <List.Item key={dish._id}>
        <List.Content floated="right">
          {selectedProducts.find(product => product._id === dish._id) ? (
            <Button onClick={() => onRemoveProduct(dish)}>Remove</Button>
          ) : (
            <Button onClick={() => onSelectProduct(dish)}>Add</Button>
          )}
        </List.Content>
        <List.Content>
          <span>
            {dish.name}
            {' '}
-
            {dish.price}
          </span>
        </List.Content>
      </List.Item>
    ))}
  </List>
);
