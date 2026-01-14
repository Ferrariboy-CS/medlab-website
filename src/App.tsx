import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  ProductsPage,
  CategoryPage,
  AboutPage,
  ContactPage,
  VacanciesPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
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
