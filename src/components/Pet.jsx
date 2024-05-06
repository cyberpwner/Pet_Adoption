import React from 'react';

function Pet() {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Luna'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Havanese'),
  ]);
}

export default Pet;
