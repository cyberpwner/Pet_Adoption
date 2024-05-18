import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Carousel({
  images = ['https://pets-images.dev-apis.com/pets/none.jpg'],
}) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-10
    "
    >
      <img
        src={images[activeImg]}
        alt="animal"
        className="xs:w-auto md:w-custom-400 rounded-2xl"
      />

      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 place-items-center mt-10">
        {images?.map((pic, index) => (
          <button
            key={pic}
            onClick={() => setActiveImg(index)}
            type="button"
            className=""
          >
            <img
              src={pic}
              alt="animal pic"
              className={classNames({
                'max-w-24 rounded-full border border-gunmetal': true,
                'opacity-60': index === activeImg,
              })}
            />
          </button>
        ))}
      </section>
    </section>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
