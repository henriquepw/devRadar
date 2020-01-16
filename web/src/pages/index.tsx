import React, { FC } from 'react';

import DevList from '~/molecules/DevList';
import Sidebar from '~/molecules/Sidebar';

import Layout from '~/templates/Layout';

const IndexPage: FC = () => (
  <Layout title="DevRadar">
    <Sidebar />
    <main>
      <DevList />
    </main>
  </Layout>
);

export default IndexPage;
