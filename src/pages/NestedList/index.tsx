import React, { memo, useLayoutEffect, useRef } from 'react';
import styles from './index.module.scss';
import Sortable from 'sortablejs';

const DropContainer: React.FC<{ title?: string }> = memo(({ title }) => {

  const containerRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const instance = Sortable.create(containerRef.current, {
      ghostClass: "editor-sortable-ghost",
      easing: "cubic-bezier(1, 0, 0, 1)",
      scroll: true,
      bubbleScroll: false,
      animation: 100,
      swapThreshold: 0.65,
    });
    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className={styles['nested-list']}>
      <p className={styles['nested-list__title']}>
        {title || 'Drop Container'}
      </p>
      <div className={styles['nested-list__content']} ref={containerRef}>

      </div>
    </div>
  );
});


const NestedList: React.FC = memo(() => {

  return (
    <div className={styles['page']}>
      <DropContainer title='可拖拽区域' />

      <DropContainer title='放置区域' />
    </div>
  );
});

NestedList.displayName = 'NestedList';

export default NestedList;
