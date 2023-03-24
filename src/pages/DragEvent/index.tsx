import React, { memo } from 'react';
import styles from './index.module.scss';

const Test: React.FC = memo(() => {

  return (
    <div className={styles['page']}>

    </div>
  );
});

Test.displayName = 'Test';

export default Test;
