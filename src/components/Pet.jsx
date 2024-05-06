import React from 'react';
import PropTypes from 'prop-types';

function Pet({ name, animal, breed }) {
  return React.createElement('div', {}, [
    React.createElement('h1', { key: 'name' }, name),
    React.createElement('h2', { key: 'animal' }, animal),
    React.createElement('h2', { key: 'breed' }, breed),
  ]);
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default Pet;
