import React from 'react';
import './App.css';

import { Container, Header, Accordion, Button, List, Icon } from 'semantic-ui-react';

import { menus } from './menus';

const AsiaUnique = ( 
  <List divided verticalAlign='middle'>
    {menus.AsiaUnique.dishes.map(dish => (
      <List.Item key={dish._id}>
        <List.Content floated='right'>
          {2 === dish._id ?
            <Button animated='vertical'>
              <Button.Content hidden>Remove</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          :
            <Button>Add</Button>
          }
          
        </List.Content>
        <List.Content><span>{dish.name} - {dish.price}</span></List.Content>
      </List.Item>
    ))}
  </List>
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
    <p>We recommend these restaurants 👌</p>
    <Accordion.Accordion panels={AsiaRestaurants} />
  </div>
)
const AsianFood2 = ({selectedDishId }) => {
  console.log(selectedDishId)
  return (
    <div>
    <p>We recommend these restaurants 👌</p>
    <Accordion.Accordion panels={AsiaRestaurants} />
  </div>
  )
};

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
    selectedDishId: null
  }
  handleDishSelect = (dishId) => {
    this.setState({
      selectedDishId: dishId
    });
  }
  render(){
    const { selectedDishId } = this.state;
    return (
      <div className='App'>
        <Container>
          <Container className='mainheader' textAlign='center'>
            <Header>lunchy</Header>
          </Container>

          <Container className='welcomeText' textAlign='center'>
            <p>Hey 👋, what u wanna eat today? <br/>
            </p>
            <p>Need inspiration? Check what your colleagues ordered!</p>
          </Container>

          <Container className='mainContent' textAlign='left'>
            <Accordion 
              panels={categories.map(category => {
                category.content.selectedDishId = selectedDishId
                category.content.onSelectDish = this.handleDishSelect
                return category
              })} 
              styled 
            />
          </Container>
        </Container>
      </div>
    )
  }
}

export default App;
