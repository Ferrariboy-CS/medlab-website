import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  ProductsPage,
  CategoryPage,
  SolutionsPage,
  ServiceSupportPage,
  AboutPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:categorySlug" element={<CategoryPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="service-support" element={<ServiceSupportPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
