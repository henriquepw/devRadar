import React from 'react';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

interface Props {
 children: React.ReactNode;
 title: string
}

function Layout({ children, title }: Props) {
  return (
    <Container>
      <GlobalStyle />
      <SEO title={title} />
      <main>{children}</main>
      <footer>
        {`© ${new Date().getFullYear()}, Built by `}
        <a href="https://github.com/ieeeifpbcg">aaaaaaaaaaaaaa</a>
      </footer>
    </Container>
  );
}

export default Layout;
