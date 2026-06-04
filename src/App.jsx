import { StrictMode } from 'react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import ScrollToTop from './utils/scrollToTop';
import CartProvider from './context/CartContext';
import AuthProvider from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer, { FooterCheckout } from './components/layout/Footer';

// Professional Lazy Loading Code-Splitting Layout Bundles
const Catalog = lazy(() => import('./pages/catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/cart'));
const Auth = lazy(() => import('./pages/Auth'));
const Checkout = lazy(() => import('./pages/checkout'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const PaymentFailure = lazy(() => import('./pages/PaymentFailure'));

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main style={{ minHeight: '75vh' }}>
         <Outlet />
      </main>
      <Footer />
    </>
  );
}

function GatewayLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main style={{ minHeight: '80vh' }}>
         <Outlet />
      </main>
      <FooterCheckout />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Catalog /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/auth', element: <Auth /> },
      { path: '/payment-success', element: <PaymentSuccess /> },
      { path: '/payment-failure', element: <PaymentFailure /> }
    ]
  },
  {
    path: '/checkout',
    element: <GatewayLayout />,
    children: [
      { path: '/checkout', element: <Checkout /> }
    ]
  }
]);

export default function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <CartProvider>
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px', fontSize: '20px' }}>Loading Layout Node Asset Modules...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </CartProvider>
      </AuthProvider>
    </StrictMode>
  );
}