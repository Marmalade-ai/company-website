import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-20 mb-8 text-gray-800">
    <hr />
    <div className="flex flex-col md:flex-row -mx-3">
      <section className="flex-1 px-3 order-last md:order-first">
        <h2 className="text-lg font-semibold">Marmalade AI, Inc.</h2>
        <ul className="mt-4 leading-loose list-none">
          <li>Make networking easy.</li>
          <li>Copyright © 2021 Marmalade AI, Inc.</li>
        </ul>
      </section>
      <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Resources</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <a href="https://forum.marmalade.ai/">Forum</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <a href="https://twitter.com/MarmaladeAI">Twitter</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Policies</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </footer>
);

export default Footer;
