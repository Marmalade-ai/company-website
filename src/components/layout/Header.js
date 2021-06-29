import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "gatsby"
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
        <AnchorLink className="px-4" href="#features">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Pricing
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          News
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          FAQ
        </AnchorLink>
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
