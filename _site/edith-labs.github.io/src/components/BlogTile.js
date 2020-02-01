import { Link } from 'gatsby';
import React from 'react';

function BlogTile({ title, excerpt, permalink }) {
  return (
    <Link to={permalink} class='tile is-child is-info notification tile-link'>
      <p class='title'>{title}</p>
      <p>{excerpt}</p>
    </Link>
  );
}

export default BlogTile;