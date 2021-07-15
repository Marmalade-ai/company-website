import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Link to="/#">
            <StaticImage src="../../images/marmalade-logo.jpg" alt="Marmalade AI Logo" />
          </Link>
        </div>
        Marmalade AI
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/#">
          Home
        </Link>
        <Link className="px-4" to="/#features">
          Features
        </Link>
        <Link className="px-4" to="/#benefits">
          Benefits
        </Link>
        <Link className="px-4" to="/#pricing">
          Pricing
        </Link>
        <Link className="px-4" to="/#">
          News
        </Link>
        <Link className="px-4" to="/#">
          FAQ
        </Link>
        <Link className="px-4" to="/about">
          About Us
        </Link>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Login</Button>
      </div>
    </nav>
  </header>
);

export default Header;
