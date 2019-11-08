import React, from 'react';
import { useStoreState } from '../store';

const Article = () => {
  const state = useStoreState()

  return (
    <article>
      <header>
        <h1>My Cool Article</h1>
      </header>
      <section>
        <p>This was good! {state.count} out of 5 stars</p>
      </section>
    </article>
  );
};

export default Article;
