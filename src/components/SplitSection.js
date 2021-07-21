import React from 'react';
import PropTypes from 'prop-types';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${
          reverseOrder && `order-last lg:order-first`
        }`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

SplitSection.propTypes = {
  id: PropTypes.string,
  primarySlot: PropTypes.element,
  secondarySlot: PropTypes.element,
  reverseOrder: PropTypes.bool,
};

SplitSection.defaultProps = {
  id: '',
  primarySlot: null,
  secondarySlot: null,
  reverseOrder: false,
};

export default SplitSection;
