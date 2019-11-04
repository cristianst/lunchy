import React from 'react';
import { OrdersConsumer } from '.';

export function withOrdersContext(Component) {
  return function WrapperComponent(props) {
    return (
      <OrdersConsumer>{context => <Component {...{ ...context, ...props }} />}</OrdersConsumer>
    );
  };
}
