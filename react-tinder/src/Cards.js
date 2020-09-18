import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';

function Cards() {
  const [people, setPeople] = useState([
    {
      name: 'User 1',
      url:
        'https://images.pexels.com/photos/5205325/pexels-photo-5205325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'User 2',
      url:
        'https://images.pexels.com/photos/5205325/pexels-photo-5205325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      name: 'User 3',
      url:
        'https://images.pexels.com/photos/5205325/pexels-photo-5205325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {};

  return (
    <div className="cards">
      <div className="cards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
            <div style={{ backgroundImage: `url('${person.url})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
