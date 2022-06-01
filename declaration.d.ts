import * as React from 'react';
import { observer } from 'mobx-react';
import * as styled from 'styled-components';

declare global {
  const React: typeof React;
  const styled: typeof styled;
  const observer: typeof observer;
}

declare module '*.json' {
  const value: any;
  export default value;
}
