'use strict';

import React from 'react';

export default ({ favoriteToys, collectToyInfo, submit, bands }) => (
  <div>
    <h1>Cody's Homepage</h1>
    <div>
      <h3>Cody's Favorite Toys</h3>
      <ul>
        {
          favoriteToys.map(toy => (
            <li key={toy.name}>{toy.name}</li>
          ))
        }
      </ul>
      <h3>Cody is so psyched about....</h3>
      <ul>
        {
          bands.map(event => (
            <li key={event.name}>{event.name}</li>
          ))
        }
      </ul>
    </div>
    <div>
      <input placeholder="Add new toy" onChange={collectToyInfo} />
      <button onClick={submit}>Add Toy</button>
    </div>
  </div>
);