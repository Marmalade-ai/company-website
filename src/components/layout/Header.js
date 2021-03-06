import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Link to="/#">
            <StaticImage
              src="../../images/marmalade-logo-sm.jpg"
              alt="The Marmalade AI Logo."
              title="Marmalade AI, Inc."
            />
          </Link>
        </div>
        <Link to="/#">Marmalade AI</Link>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/#">
          Home
        </Link>
        <Link className="px-4" to="/communities">
          Communities
        </Link>
        <Link className="px-4" to="/faq">
          FAQ
        </Link>
        <Link className="px-4" to="/about">
          About
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
