/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
 Container, Header, Accordion, Icon
} from 'semantic-ui-react';
import { withOrdersContext } from './context/withOrdersContext';

import './App.css';
import { CategoryController } from './components/Category';

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

  render() {
    const { categories, availableRestaurants } = this.props;
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
            {categories.map((category, index) => {
              const restaurantsForCategory = availableRestaurants.filter(
                restaurant => restaurant.category === category.name
              );
              return (
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
                    {restaurantsForCategory.length > 0 && (
                      <CategoryController
                        name={category.title}
                        restaurants={restaurantsForCategory}
                      />
                    )}
                  </Accordion.Content>
                </Accordion>
              );
            })}
          </Container>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  availableRestaurants: PropTypes.shape([]).isRequired,
  categories: PropTypes.shape([]).isRequired
};

export default withOrdersContext(App);
