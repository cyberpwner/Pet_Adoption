import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(mediaQuery.matches);

  const memoizedState = useMemo(
    () => ({ isDarkMode, setIsDarkMode }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={memoizedState}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
