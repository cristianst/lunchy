import React from 'react';
import PropTypes from 'prop-types';
import {
 Container, Header, Accordion, Icon
} from 'semantic-ui-react';
import { withOrdersContext } from './context/withOrdersContext';

import './App.css';
import { Restaurant } from './components/restaurants';

class App extends React.PureComponent {
  state = {
    activeAccordion: null
  };

  handleDropdownClick = (index) => {
    this.setState((prevState) => {
      if (index === prevState.activeAccordion) {
        return { activeAccordion: null };
      }
      return { activeAccordion: index };
    });
  };

  renderRestaurantsForCategory = (category) => {
    const { availableRestaurants } = this.props.context;

    const restaurants = availableRestaurants.filter(restaurant => restaurant.category === category);

    return restaurants.map(restaurant => (
      <Restaurant
        menu={restaurant.menu}
        onSelectDish={this.props.context.onSelectDish}
        onRemoveDish={this.props.context.onRemoveDish}
      />
    ));
  };

  render() {
    const { categories } = this.props.context;
    const { activeAccordion } = this.state;
    return (
      <div className="App">
        <Container>
          <Container className="mainheader" textAlign="center">
            <Header>lunchy</Header>
          </Container>

          <Container className="welcomeText" textAlign="center">
            <p>
              Hey
              {' '}
              {/* {getUserName()} */}
              <span aria-label="wave" role="img">
                👋
              </span>
              , what u wanna eat today?
              <br />
            </p>
            <p>Need inspiration? Check what your colleagues ordered!</p>
          </Container>

          <Container className="mainContent" textAlign="left">
            {categories.map((category, index) => (
              <Accordion key={category.name}>
                <Accordion.Title
                  active={activeAccordion === index}
                  onClick={() => this.handleDropdownClick(index)}
                >
                  {category.title}
                  {' '}
                  <Icon name="dropdown" />
                </Accordion.Title>
                <Accordion.Content active={activeAccordion === index}>
                  {this.renderRestaurantsForCategory(category.name)}
                </Accordion.Content>
              </Accordion>
            ))}
          </Container>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  context: PropTypes.shape({
    availableRestaurants: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  }).isRequired
};

export default withOrdersContext(App);
