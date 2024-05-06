import React from 'react';

function Pet() {
  return React.createElement('div', {}, [
    React.createElement('h1', { key: 'name' }, 'Luna'),
    React.createElement('h2', { key: 'animal' }, 'Dog'),
    React.createElement('h2', { key: 'breed' }, 'Havanese'),
  ]);
}

export default Pet;
