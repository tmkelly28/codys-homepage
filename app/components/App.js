'use strict';

import React from 'react';

export default ({ favoriteThings, getInput, submit }) => (
  <div className="flex flex-center container m4">
    <div>
      <h1>Cody's Homepage</h1>
      <div>
        <h3>Cody's Favorite Things!</h3>
        <ul className="list-reset ml2">
          {
            favoriteThings.map(toy => (
              <li key={toy.name}>{toy.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <input type="text" className="field" placeholder="Add new toy" onChange={getInput} />
        <button className="btn" onClick={submit}>Submit</button>
      </div>
    </div>
    <div className="flex-auto"></div>
    <div>
      <img src="/codys-homepage/public/cody.jpg" />
    </div>
    <div className="flex-auto"></div>
  </div>
);
