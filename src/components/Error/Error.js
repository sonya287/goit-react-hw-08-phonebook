import React from 'react';
import { error } from './Error.module.scss';

export const Error = () => {
  return (
    <div className={error}>
      <h1>It seems like something is broken, we will fix it soon</h1>
    </div>
  );
};
