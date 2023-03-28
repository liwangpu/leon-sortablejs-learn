import React, { memo } from 'react';
import styles from './index.module.scss';

const Home: React.FC = memo(() => {

  return (
    <div className={styles['page']}>
      Home Page
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
