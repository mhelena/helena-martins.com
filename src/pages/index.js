import React from 'react';
import styles from './index.module.css';

import 'typeface-dancing-script';

const interests = [
  'Population Genetics',
  'Statistics',
  'Apply Math',
  'R',
  'Systems Biology',
  'Politics',
  'Languages',
  'Caenorhabditis elegans',
  'Arabidopsis thaliana'
];

const IndexPage = () => (
  <main className={styles.container}>
    {/*<p>PhD Student, Université Grenoble Alpes</p>*/}
    <div className={styles.image}>
      <img src={'https://avatars1.githubusercontent.com/u/11591145?v=4&s=460'}/>
    </div>
    <div className={styles.interests}>
      <h2 className={styles.interestsTitle} style={{fontFamily: 'Dancing Script'}}>
        My main points of interest are:</h2>
      <ul>
        {interests.map(interest => <li key={interest}>{interest}</li>)}
      </ul>

    </div>
  </main>
);

export default IndexPage;
