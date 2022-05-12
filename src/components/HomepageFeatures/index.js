import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '满足学生好奇心的平台',
    imgDir: 'img/died.jpg',
    description: (
      <>
        当你第一次提前看到了分，你第二次肯定也想提前看（
      </>
    ),
  },
];

function Feature({imgDir, title, description}) {
  return (
    <div className={clsx('col col--6 col--offset-3')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={imgDir} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
