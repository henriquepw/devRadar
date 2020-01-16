import React from 'react';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

interface Props {
  children: React.ReactNode;
  title: string;
}

function Layout({ children, title }: Props) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      {children}
    </Container>
  );
}

export default Layout;
