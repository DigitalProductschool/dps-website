import React from 'react';
import Home from './home/index.tsx';
import queryString from 'query-string';

const getQuery = query => {
  const fallback = 'Video';
  if (query) {
    const type = queryString.parse(query);
    if (['Photo'].includes(type.query)) {
      return type.query;
    }
    return fallback;
  }
  return fallback;
};

const IndexPage = props => {
  const headerType = props.location && getQuery(props.location.search);
  return <Home headerType={headerType} />;
};

export default IndexPage;
