import React from 'react';
import PropTypes from 'prop-types';

import { OrdersProvider } from './Orders';

export class OrdersController extends React.Component {
  state = {
    selectedProducts: [],
    availableRestaurants: [],
    categories: [],
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
          title: 'Asia Quick'
        }
      ],
      categories: [
        {
          name: 'asian',
          title: 'Asian Food 🍜'
        },
        {
          name: 'pizza',
          title: 'Pizza 🍕',
        }
      ],
    });
  };

  handleSelectProduct = (product) => {
    this.setState((prevState) => {
      const selectedProducts = [...prevState.selectedProducts, product];

      return {
        selectedProducts
      };
    });
  };

  handleRemoveProduct = (product) => {
    const { selectedProducts } = this.state;
    const filteredProducts = selectedProducts.filter(
      selectedProduct => selectedProduct._id !== product._id
    );

    this.setState({
      selectedProducts: filteredProducts
    });
  };

  getUserName = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const username = url.searchParams.get('user');
    return username;
  };

  render() {
    const {
 selectedProducts, categories, availableRestaurants
} = this.state;
    const { children } = this.props;
    const { handleSelectProduct, handleRemoveProduct, getUserName } = this;
    const contextValue = {
      selectedProducts,
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
