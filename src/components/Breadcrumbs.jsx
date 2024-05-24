import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import useTheme from '../contexts/ThemeContext/useTheme';

function Breadcrumbs() {
  const { isDarkMode } = useTheme();
  const { pathname } = useLocation();

  const crumbs = pathname.split('/').filter((crumb) => crumb !== '');

  let currentPath = '';

  // console.log(pathname);

  return (
    <ul
      className={classNames(
        'breadcrumbs mt-3 ml-3 flex gap-3 absolute left-3 bottom-3',
        {
          'text-white': isDarkMode,
          'text-gunmetal': !isDarkMode,
        }
      )}
    >
      {crumbs?.map((crumb) => {
        // avoid having '/Pet_Adoption/' two times in the path, cause it's the root path not '/'
        currentPath += crumb === 'Pet_Adoption' ? '' : `${crumb}/`;

        return (
          <li key={`${crumb}`}>
            <Link
              to={crumb === 'details' ? '' : currentPath}
              className={classNames(
                'underline hover:text-vista-blue transition-all',
                {
                  'text-gray-400 pointer-events-none': crumb === 'details',
                }
              )}
            >
              {crumb === 'Pet_Adoption' ? (
                <FaHouse className="inline mb-1" />
              ) : (
                `${crumb}`
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
