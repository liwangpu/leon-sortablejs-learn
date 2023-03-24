import styles from './index.module.scss';
import { memo, useMemo } from 'react';
import { SimpleNavsPage, INavItem } from '../SimpleNavsPage';

const App: React.FC = memo(() => {

  const routes = useMemo<Array<INavItem>>(() => ([
    {
      title: 'Home',
      path: '/app/home',
    },
    {
      title: 'Test',
      path: '/app/test',
    }
  ]), []);

  return (
    <div className={styles['tutorial-app']}>
      <SimpleNavsPage title='拖拽测试' routes={routes} />
    </div>
  );
});

export default App;