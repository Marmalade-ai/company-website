import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
