import React from 'react';
import { Redirect } from 'umi';

const Main = props => {
  const { location } = props;
  const { query } = location;
  return (
    <Redirect
      to={{
        pathname: '/home',
        query,
      }}
    />
  );
};

export default Main;
