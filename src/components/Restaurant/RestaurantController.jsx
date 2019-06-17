import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { withOrdersContext } from '../../context/withOrdersContext';
import { Restaurant } from './Restaurant';

class RestaurantController extends React.PureComponent {
  constructor(props) {
    super(props);
    const { restaurants, selectedDishes } = props;
    this.state = {
      restaurants,
      selectedDishes,
      activeRestaurant: null
    };
  }

  handleSelectRestaurantClick = (index) => {
    this.setState(({ activeRestaurant }) => {
      if (activeRestaurant === index) {
        return { activeRestaurant: null };
      }

      return { activeRestaurant: index };
    });
  };

  render() {
    const { restaurants, selectedDishes, activeRestaurant } = this.state;
    const { onSelectDish, onRemoveDish } = this.props;
    return restaurants.map((restaurant, index) => (
      <Accordion>
        <Accordion.Title
          active={activeRestaurant === index}
          onClick={() => this.handleSelectRestaurantClick(index)}
        >
          <Icon name="dropdown" onClick={() => this.handleSelectRestaurantClick(index)} />
          {restaurant.title}
        </Accordion.Title>
        <Accordion.Content active={activeRestaurant === index}>
          <Restaurant
            selectedDishes={selectedDishes}
            onSelectDish={onSelectDish}
            onRemoveDish={onRemoveDish}
            menu={restaurant.menu}
          />
        </Accordion.Content>
      </Accordion>
    ));
  }
}

export default withOrdersContext(RestaurantController);
