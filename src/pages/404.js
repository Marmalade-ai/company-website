import React from 'react';
import Layout from '../components/layout/Layout';

const NotFound = () => (
  <Layout>
    <section className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3 text-center">
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>The page you are looking for may have been moved or deleted. Try searching again.</p>
      </div>
    </section>
  </Layout>
);

export default NotFound;
