import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/';
import { Error } from './Pages/Error';
import { useState } from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Header from './Components/Header';
// import MobileNav from './Components/MobileNav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  /** Put your mantine theme override here */
});

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <MantineProvider theme={theme}>
      <Header />
      <Outlet />
      {/* <MobileNav open={open} handleOpen={handleMobileNav} /> */}
    </MantineProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
