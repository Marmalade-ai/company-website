import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-20 mb-8 text-gray-800">
    <hr />
    <div className="flex -mx-3">
      <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Marmalade AI, Inc.</h2>
        <ul className="mt-4 leading-loose list-none">
          <li>Make networking easy.</li>
          <li className="mt-8">Copyright © 2021 Marmalade AI, Inc.</li>
        </ul>
      </section>
      <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
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
            <li>
              <a href="https://github.com/marmalade-ai">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/marmalade-ai">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </footer>
);

export default Footer;
