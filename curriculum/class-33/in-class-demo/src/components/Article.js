import React, { memo } from 'react';
import { useStoreState } from '../store';

const Article = () => {
  const state = useStoreState();
  return (
    <article>
      <header>
        <h1>My Article</h1>
      </header>
      <section>
        <p>It was good {state.count}</p>
      </section>
    </article>
  );
};

export default memo(Article);
