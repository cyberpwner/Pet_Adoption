import React from 'react';
import Pet from './components/Pet';

function App() {
  return React.createElement('div', { id: '' }, [
    React.createElement('h1', { style: { color: 'red' } }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ]);
}

export default App;
