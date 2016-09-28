'use strict';

import React from 'react';

export default ({ favoriteToys, collectToyInfo, submit, bands }) => (
  <div className="flex flex-center container m4">
    <div>
      <h1>Cody's Homepage</h1>
      <div>
        <h3>Cody's Favorite Toys</h3>
        <ul className="list-reset ml2">
          {
            favoriteToys.map(toy => (
              <li key={toy.name}>{toy.name}</li>
            ))
          }
        </ul>
        <h3>Cody is so psyched about....</h3>
        <ul className="list-reset ml2">
          {
            bands.map(event => (
              <li key={event.name}>{event.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <input type="text" className="field" placeholder="Add new toy" onChange={collectToyInfo} />
        <button className="btn" onClick={submit}>Add Toy</button>
      </div>
    </div>
    <div className="flex-auto"></div>
    <div>
      <img src="./public/cody.jpg" />
    </div>
    <div className="flex-auto"></div>
  </div>
);