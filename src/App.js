import React from 'react';
import './App.css';

import { Container, Header, Accordion, Button, List } from 'semantic-ui-react';

import { menus } from './menus';
import {  OrdersContext } from './api/OrdersContext';

const AsiaUnique = (
  <OrdersContext.Consumer>
    {context => (
      <List divided verticalAlign='middle'>
        {menus.AsiaUnique.dishes.map(dish => (
          <List.Item key={dish._id}>
            <List.Content floated='right'>
              {context.selectedProducts.find(product => product._id === dish._id) ?
                <Button onClick={() => context.onRemoveProduct(dish)}>Remove</Button>
              :
                <Button onClick={() => context.onSelectProduct(dish)}>Add</Button>
              }     
            </List.Content>
            <List.Content><span>{dish.name} - {dish.price}</span></List.Content>
          </List.Item>
        ))}
      </List>
    )}

  </OrdersContext.Consumer>
);
const AsiaQuick = (<div>Asia Quick</div>);

const Pizza = (<div>pizzaa </div>);

const AsiaRestaurants = [{
  key: 'asiaunique',
  title: 'Asia Unique',
  content: {
    content: AsiaUnique
  }
}, {
  key: 'asiaquick',
  title: 'Asia Quick',
  content: {
    content: AsiaQuick

  }
}];

const AsianFood = (
  <div>
    <p>We recommend these restaurant <span aria-label='ok-hand' role='img'>👌</span></p>
    <Accordion.Accordion panels={AsiaRestaurants} />
  </div>
)
/*const AsianFood2 = () => {
  return (
    <div>
    <p>We recommend these restaurants <span aria-label='ok-hand' role='img'>👌</span></p>
    <Accordion.Accordion panels={AsiaRestaurants} />
  </div>
  )
};*/

const categories = [{ 
  key: 'asia', 
  title: 'Asian Food 🍜', 
  content: { 
    content: AsianFood,
    foo: 'foo'
  } 
},{ 
  key: 'pizza', 
  title: 'Pizza 🍕', 
  content: { 
    content: Pizza 
  }
}];


class App extends React.PureComponent {
  state = {
    selectedProducts: []
  }
  handleSelectProduct = (product) => {
    console.log('add');
    this.setState(prevState => {
      const selectedProducts = [
        ...prevState.selectedProducts,
        product
      ];

      return {
        selectedProducts
      };
    });
  }
  handleRemoveProduct = (product) => {
    console.log('remove');
    const { selectedProducts } = this.state;
    const filteredProducts = selectedProducts.filter(selectedProduct => {
      return selectedProduct._id !== product._id 
    });

    this.setState({
      selectedProducts: filteredProducts
    });
  }

  getUserName =  () => {
    
    const urlString = window.location.href;
    const url = new URL(urlString);
    const username= url.searchParams.get("user");  
    console.log(username);
    return username;
  }
  render(){
    const { selectedProducts } = this.state;
    return (
      <div className='App'>
      <OrdersContext.Provider value={{
        selectedProducts,
        onSelectProduct: this.handleSelectProduct,
        onRemoveProduct: this.handleRemoveProduct
      }}>
          <Container>
            <Container className='mainheader' textAlign='center'>
              <Header>lunchy</Header>
            </Container>

            <Container className='welcomeText' textAlign='center'>
              <p>Hey {this.getUserName()}<span aria-label='wave' role='img'>👋</span>, what u wanna eat today? <br/>
              </p>
              <p>Need inspiration? Check what your colleagues ordered!</p>
            </Container>

            <Container className='mainContent' textAlign='left'>
              <Accordion 
                panels={categories} 
                styled 
              />
            </Container>
          </Container>
      </OrdersContext.Provider>
      </div>
    )
  }
}

export default App;
