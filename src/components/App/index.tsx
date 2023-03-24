import styles from './index.module.scss';
import { memo } from 'react';
import { SimpleNavsPage } from '../SimpleNavsPage';
import Navs from '../../navs';

const App: React.FC = memo(() => {

  return (
    <div className={styles['app']}>
      <SimpleNavsPage title='拖拽测试' routes={Navs} />
    </div>
  );
});

export default App;