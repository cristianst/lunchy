import React from 'react';

const OrdersContext = React.createContext();

const OrdersConsumer = OrdersContext.Consumer;
const OrdersProvider = OrdersContext.Provider;

export { OrdersContext, OrdersConsumer, OrdersProvider };
