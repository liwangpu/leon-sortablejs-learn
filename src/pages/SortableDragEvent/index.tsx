import React, { memo, useEffect, useMemo, useRef } from 'react';
import styles from './index.module.scss';
// import Sortable from '../../sortablejs/Sortable';
import Sortable from 'sortablejs';
import classnames from 'classnames';

const DropZone: React.FC<{ title: string; children?: React.ReactNode; zindex?: number; bgColor?: string }> = memo(props => {

  const hostRef = useRef<HTMLDivElement>();

  const style = useMemo(() => {
    return {
      zIndex: props.zindex || 9,
      backgroundColor: props.bgColor || '#FFF'
    };
  }, [props.zindex, props.bgColor]);

  useEffect(() => {
    if (!hostRef.current) { return; }

    const instance = Sortable.create(hostRef.current, {
      group: {
        name: 'dynamic-component',
        put: true,
        pull: false,
      },
      easing: "cubic-bezier(1, 0, 0, 1)",
      // scroll: true,
      // bubbleScroll: true,
      animation: 150,
      // fallbackOnBody: true,
      swapThreshold: 0.65,
      // scroll: true,
      // bubbleScroll: true,
      // fallbackOnBody: true,
      // fallbackOnBody: true,
      // forceFallback: false,
      // preventOnFilter: true,
      // Element is dropped into the list from another list
      onAdd(/**Event*/evt) {
        // same properties as onEnd
        // console.log(`on add:`, props.title);
      },
      onMove(/**Event*/evt, /**Event*/originalEvent) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        // return true; — keep default insertion point based on the direction
        // return void; — keep default insertion point based on the direction

        // console.log(`on move:`, props.title);

        // return false;
      },
    });

    // hostRef.current.addEventListener('dragover', e => {
    //   console.log(`drag over:`, props.title);
    // });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className={classnames(
      styles['zone'],
      styles['zone--drop'],
    )} ref={hostRef} style={style}>
      {props.children}
    </div>
  );
});

DropZone.displayName = 'DropZone';


const DragZone: React.FC = memo(props => {

  const hostRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!hostRef.current) { return; }

    const instance = Sortable.create(hostRef.current, {
      group: {
        name: 'dynamic-component',
      },
      easing: "cubic-bezier(1, 0, 0, 1)",
      // scroll: true,
      // bubbleScroll: true,
      animation: 150,
      // fallbackOnBody: true,
      // fallbackOnBody: true,
      // forceFallback: false,
      // swapThreshold: 0.65,
      // preventOnFilter: true,
      onMove(/**Event*/evt, /**Event*/originalEvent) {
        // Example: https://jsbin.com/nawahef/edit?js,output
        evt.dragged; // dragged HTMLElement
        evt.draggedRect; // DOMRect {left, top, right, bottom}
        evt.related; // HTMLElement on which have guided
        evt.relatedRect; // DOMRect
        evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
        originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        // return true; — keep default insertion point based on the direction
        // return void; — keep default insertion point based on the direction
        // originalEvent.stopPropagation();
        // originalEvent.cancelBubble = true;
        // evt.stopPropagation();
        // console.log(`on move: drag zone`, evt.to);
      },
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className={styles['zone']} ref={hostRef}>
      <div className={styles['zone__item']}>1</div>
      <div className={styles['zone__item']}>2</div>
      <div className={styles['zone__item']}>3</div>
    </div>
  );
});

DragZone.displayName = 'DragZone';

const Test: React.FC = memo(() => {

  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    wrapperRef.current.addEventListener('dragover', e => {
      // e.stopPropagation();
      // e.stopImmediatePropagation();
      // console.log(`drag over: wrapper`,);
    });
    return () => {

    };
  }, []);

  return (
    <div className={styles['page']}>

      <div className={styles['section']}>
        <p className={styles['section__title']}>拖拽区</p>
        <DragZone />
      </div>

      <div className={styles['section']}>
        <p className={styles['section__title']}>放置区</p>
        <DropZone title='z1'>
          {/* <div className={classnames(
            styles['zone-wrapper'],
            styles['inner'],
          )} ref={wrapperRef}>
            <DropZone title='z1_inner' zindex={11} />
          </div> */}
        </DropZone>

        <DropZone title='z2' />

        <div className={classnames(
          styles['zone-wrapper'],
          styles['outer'],
        )} ref={wrapperRef}>
          <DropZone title='z1_inner' zindex={11} />
        </div>
      </div>


    </div>
  );
});

Test.displayName = 'Test';

export default Test;
