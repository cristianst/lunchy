import React from 'react';
import PropTypes from 'prop-types';

import { OrdersProvider } from './Orders';

export class OrdersController extends React.Component {
  state = {
    selectedDishes: [],
    availableRestaurants: [],
    categories: []
  };

  componentDidMount() {
    this.fetchData();
  }

  /**
   * This will be used maybe to retrieve data from firestore?
   */
  fetchData = () => {
    this.setState({
      availableRestaurants: [
        {
          category: 'asian',
          title: 'Asia Unique',
          key: 'asiaunique',
          menu: [
            {
              _id: 'emr',
              name: 'Eins mit Reis',
              price: '3.80'
            },
            {
              _id: 'bme',
              name: 'Bratreis mit Ente',
              price: '6.70'
            }
          ]
        },
        {
          category: 'pizza',
          title: 'Mundfein',
          key: 'pizza',
          menu: [
            {
              _id: 'rom',
              name: 'Romana',
              price: '6.80'
            },
            {
              _id: 'mrg',
              name: 'Marguerita',
              price: '6.70'
            }
          ]
        },
        {
          category: 'asian',
          title: 'Asia Quick',
          key: 'asiaquick'
        }
      ],
      categories: [
        {
          name: 'asian',
          title: 'Asian Food 🍜'
        },
        {
          name: 'pizza',
          title: 'Pizza 🍕'
        }
      ]
    });
  };

  handleSelectProduct = (dish) => {
    console.log(dish)
    this.setState((prevState) => {
      const selectedDishes = [...prevState.selectedDishes, dish];

      return {
        selectedDishes
      };
    });
  };

  handleRemoveProduct = (dish) => {
    const { selectedDishes } = this.state;
    console.log(dish);
    const filteredDishes = selectedDishes.filter(selectedDish => selectedDish._id !== dish._id);

    this.setState({
      selectedDishes: filteredDishes
    });
  };

  getUserName = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const username = url.searchParams.get('user');
    return username;
  };

  render() {
    const { selectedDishes, categories, availableRestaurants } = this.state;
    const { children } = this.props;
    const { handleSelectProduct, handleRemoveProduct, getUserName } = this;
    const contextValue = {
      selectedDishes,
      getUserName,
      onSelectDish: handleSelectProduct,
      onRemoveDish: handleRemoveProduct,
      availableRestaurants,
      categories
    };
    return <OrdersProvider value={contextValue}>{children}</OrdersProvider>;
  }
}

OrdersController.propTypes = {
  children: PropTypes.node.isRequired
};

export default OrdersController;
