import classNames from 'classnames';
import PropTypes from 'prop-types';

function PaginationBar({ numOfResults, currentPage, setCurrentPage }) {
  if (!numOfResults) {
    return null;
  }

  let numOfPages = Math.floor(numOfResults / 10);

  if (numOfResults % 10 !== 0) {
    numOfPages += 1;
  }

  // an array of numbers (0 to numOfPages)
  const array = [...Array(numOfPages).keys()];

  return (
    <ul className="pagination-list">
      {array.map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => setCurrentPage(num)}
          className={classNames({
            'bg-gray-100 border border-black/25 py-2 px-4 m-1 rounded hover:bg-gray-200': true,
            'bg-true-blue hover:bg-true-blue/90 text-white border border-gray-200':
              num === currentPage,
          })}
        >
          <li>{num + 1}</li>
        </button>
      ))}
    </ul>
  );
}

PaginationBar.propTypes = {
  numOfResults: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationBar;
