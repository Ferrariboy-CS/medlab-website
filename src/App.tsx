import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  CategoryPage,
  AboutPage,
  ContactPage,
  VacanciesPage,
} from './pages';

const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage }))
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<div className="py-20 text-center text-gray-600 dark:text-slate-300">Loading products…</div>}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route path="products/:categorySlug" element={<CategoryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
