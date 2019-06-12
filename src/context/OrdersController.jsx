import React from 'react';
import PropTypes from 'prop-types';

import { OrdersProvider } from './Orders';

export class OrdersController extends React.Component {
  state = {
    selectedProducts: []
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
    const { selectedProducts } = this.state;
    const { children } = this.props;
    const { handleSelectProduct, handleRemoveProduct, getUserName } = this;
    const contextValue = {
      selectedProducts,
      getUserName,
      onSelectProduct: handleSelectProduct,
      onRemoveProduct: handleRemoveProduct,
    };
    return <OrdersProvider value={contextValue}>{children}</OrdersProvider>;
  }
}

OrdersController.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrdersController;
