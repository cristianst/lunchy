import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { withOrdersContext } from '../../context/withOrdersContext';

class CategoryController extends React.PureComponent {
  constructor(props) {
    const { restaurants } = props;
    const { name } = props;
    super(props);
    this.state = {
      activeCategory: null,
      restaurants,
      name
    };
  }

  handleOnCategoryClick = (index) => {
    this.setState(({ activeCategory }) => {
      if (activeCategory === index) {
        return { activeCategory: null };
      }
      return { activeCategory: index };
    });
  };

  render() {
    const { activeCategory, restaurants, name } = this.state;
    return <Category {...{ activeCategory, restaurants, name }} />;
  }
}

CategoryController.propTypes = {
  name: PropTypes.string.isRequired,
  restaurants: PropTypes.shape([]).isRequired
};

export default withOrdersContext(CategoryController);
