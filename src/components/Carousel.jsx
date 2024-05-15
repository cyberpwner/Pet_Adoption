import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Carousel({
  images = ['https://pets-images.dev-apis.com/pets/none.jpg'],
}) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="carousel">
      <img src={images[activeImg]} alt="" />
      <section className="carousel-smaller">
        {images?.map((pic, index) => (
          <button
            key={pic}
            onClick={() => setActiveImg(index)}
            type="button"
            className="carousel__button--img"
          >
            <img
              src={pic}
              alt="animal pic"
              className={classNames({ active: index === activeImg })}
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
