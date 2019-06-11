import React, { Component } from 'react';

export const OrdersContext = React.createContext();

export class OrdersProvider extends Component {
  state = {
    selectedDishId: ''
  }
  render(){
    return(
      <OrdersContext.Provider value='value'>
        {this.props.children}
      </OrdersContext.Provider>
    )
  }
}
