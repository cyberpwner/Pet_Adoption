import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PetSearch from './pages/PetSearch';
import RootLayout from './layouts/RootLayout';
import PetDetails from './pages/PetDetails';
import ErrorScreen from './components/ErrorScreen';
import AdoptedPetProvider from './contexts/AdoptedPetContext/AdoptedPetProvider';
import ThemeProvider from './contexts/ThemeContext/ThemeProvider';
import NotFound from './pages/NotFound';

const ERROR_MESSAGE = 'An error has occurred';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/Pet_Adoption"
      element={<RootLayout />}
      errorElement={<ErrorScreen errorMessage={ERROR_MESSAGE} />}
    >
      <Route
        index
        element={<PetSearch />}
        errorElement={<ErrorScreen errorMessage={ERROR_MESSAGE} />}
      />
      <Route
        path="details/:id"
        element={<PetDetails />}
        errorElement={<ErrorScreen errorMessage={ERROR_MESSAGE} />}
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AdoptedPetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
