import React from 'react';
import { AsiaUnique, AsiaQuick, Pizza } from '../components/restaurants';
import { AsianFood } from '../components';

const categories = [
  {
    key: 'asia',
    title: 'Asian Food 🍜',
    content: {
      content: <AsianFood />,
      foo: 'foo'
    }
  },
  {
    key: 'pizza',
    title: 'Pizza 🍕',
    content: {
      content: <Pizza />
    }
  }
];

const AsiaRestaurants = [
  {
    key: 'asiaunique',
    title: 'Asia Unique',
    content: {
      content: <AsiaUnique />,
    }
  },
  {
    key: 'asiaquick',
    title: 'Asia Quick',
    content: {
      content: <AsiaQuick />
    }
  }
];

const menus = {
  AsiaUnique: {
    dishes: [{
      _id: 'emr',
      name: 'Eins mit Reis',
      price: '3.80'
    }, {
      _id: 'bme',
      name: 'Bratreis mit Ente',
      price: '6.70'
    }]
  }
};

export {
  categories,
  AsiaRestaurants,
  menus,
};
