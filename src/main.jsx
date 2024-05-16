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

const ERROR_MESSAGE = 'An error occurred';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
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
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTimr: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdoptedPetProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AdoptedPetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
