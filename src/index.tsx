import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/';
import { Error } from './Pages/Error';
import { useState } from 'react';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Header from './Components/Header';
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      </Helmet>
      <MantineProvider theme={theme}>
        <Header />
        <Outlet />
        {/* <MobileNav open={open} handleOpen={handleMobileNav} /> */}
      </MantineProvider>
    </>
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
