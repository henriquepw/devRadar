import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement = ({ element }: Props) => (
  <HelmetProvider>{element}</HelmetProvider>
);
