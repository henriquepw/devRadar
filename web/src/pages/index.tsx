import React from 'react';

import Sidebar from '~/molecules/Sidebar';

import Layout from '~/templates/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <Sidebar />
    <main />
  </Layout>
);

export default IndexPage;
