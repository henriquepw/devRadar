import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { DevProvider } from '../src/context/DevContext';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement = ({ element }: Props) => (
  <HelmetProvider>
    <DevProvider>{element}</DevProvider>
  </HelmetProvider>
);
