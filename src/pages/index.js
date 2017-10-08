import React from 'react';

const interests = [
  'Statistics', 'Linguistics', 'R', 'Applied Math'
];

const IndexPage = () => (
  <div>
    <h1>Hi, I'm Helena</h1>
    <p>PhD Student, Université Grenoble Alpes</p>
    <h2>My main point of interest are:</h2>
    <ul>
      {interests.map(interest => <li key={interest}>{interest}</li>)}
    </ul>
    <hr />
    <img src={'https://avatars1.githubusercontent.com/u/11591145?v=4&s=460'} />
  </div>
);

export default IndexPage;
