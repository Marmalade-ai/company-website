import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <StaticImage src="../../images/marmalade-logo.jpg" alt="Marmalade AI Logo" />
        </div>
        Marmalade AI
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="../../#">
          Home
        </Link>
        <Link className="px-4" to="../../#benefits">
          Features
        </Link>
        <Link className="px-4" to="../../#pricing">
          Pricing
        </Link>
        <Link className="px-4" to="../../#">
          News
        </Link>
        <Link className="px-4" to="../../#">
          FAQ
        </Link>
        <Link className="px-4" to="../../about/">
          About Us
        </Link>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Login</Button>
      </div>
    </div>
  </header>
);

export default Header;
