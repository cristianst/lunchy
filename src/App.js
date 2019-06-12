import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import {
 Container, Header, Accordion,
} from 'semantic-ui-react';

import { categories } from './data';

import { withOrdersContext } from './context/withOrdersContext';

const App = (props) => {
  console.log(props);
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
          <Accordion panels={categories} styled />
        </Container>
      </Container>
    </div>
  );
};

App.propTypes = {
  getUserName: PropTypes.func.isRequired,
};

export default withOrdersContext(App);
