import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription, CardPlaceholder, CardBadge } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { productCategories, mainCategories } from '../data/productCategories';
import { products } from '../data/products';
import { useQuote } from '../contexts';
import { getCategoryIcon } from '../components/icons/CategoryIcons';
import { BeakerIcon } from '@heroicons/react/24/outline';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { addItem, items } = useQuote();
  
  const isInQuote = (productId: string) => items.some((item) => item.product.id === productId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const category = productCategories.find((c) => c.slug === categorySlug);
  const mainCategory = category ? mainCategories.find((c) => c.id === category.mainCategory) : null;

  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return products.filter((p) => p.categorySlug === category.slug);
  }, [category]);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubcategory =
        selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;

      return matchesSearch && matchesSubcategory;
    });
  }, [categoryProducts, searchQuery, selectedSubcategory]);

  const subcategories = useMemo(() => {
    const subs = new Set(categoryProducts.map((p) => p.subcategory).filter(Boolean));
    return Array.from(subs) as string[];
  }, [categoryProducts]);

  if (!category) {
    return (
      <Section padding="lg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
            <MagnifyingGlassIcon className="w-12 h-12 text-gray-300 dark:text-slate-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Category Not Found
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Button as="link" to="/products">
            Browse All Products
          </Button>
        </motion.div>
      </Section>
    );
  }

  return (
    <>
      <Hero
        title={category.name}
        description={category.description}
        size="sm"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: mainCategory?.name || '', to: `/products?category=${category.mainCategory}` },
          { label: category.name },
        ]}
      />

      <Section padding="lg">
        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-4 mb-10"
        >
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full pl-12 pr-4 py-3 
                  bg-white dark:bg-slate-800
                  border-2 border-gray-200 dark:border-slate-700 
                  rounded-xl
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-slate-500
                  focus:border-sky-500 dark:focus:border-sky-400
                  focus:outline-none
                  transition-colors
                "
              />
            </div>
          </div>
          
          {/* Subcategory Filters */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`
                  px-4 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200
                  ${selectedSubcategory === 'all'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }
                `}
              >
                All
              </button>
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`
                    px-4 py-2.5 rounded-xl text-sm font-semibold
                    transition-all duration-200
                    ${selectedSubcategory === sub
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                    }
                  `}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results count */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-500 dark:text-slate-400 mb-6"
        >
          Showing {filteredProducts.length} of {categoryProducts.length} products
        </motion.p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const inQuote = isInQuote(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardPlaceholder 
                      icon={mainCategory ? getCategoryIcon(mainCategory.iconType, 'w-10 h-10') : <BeakerIcon className="w-10 h-10" />}
                      label={product.subcategory}
                      className="h-44"
                    />
              <CardContent className="flex-1 flex flex-col">
                {product.brand && (
                        <CardBadge variant="primary">{product.brand}</CardBadge>
                )}
                <CardTitle className="mt-1">{product.name}</CardTitle>
                <CardDescription className="flex-1 line-clamp-2">
                  {product.description}
                </CardDescription>
                      
                      {product.features && product.features.length > 0 && (
                  <ul className="mt-3 space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-500 dark:text-slate-400 flex items-center gap-1.5">
                              <span className="w-1 h-1 bg-sky-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                      
                <div className="mt-4">
                  <Button
                    onClick={() => addItem(product)}
                          variant={inQuote ? 'secondary' : 'primary'}
                    size="sm"
                          fullWidth
                          icon={inQuote ? <CheckCircleIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                  >
                          {inQuote ? 'Added to Quote' : 'Add to Quote'}
                  </Button>
                </div>
              </CardContent>
            </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-10 h-10 text-gray-300 dark:text-slate-600" />
            </div>
            <p className="text-gray-600 dark:text-slate-300 mb-4">
              No products found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </Section>

      {/* Related Categories */}
      <Section background="gray" padding="md">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Explore More Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {productCategories
              .filter(c => c.mainCategory === category.mainCategory && c.id !== category.id)
              .slice(0, 4)
              .map(cat => (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className="
                    px-4 py-2 rounded-xl
                    bg-white dark:bg-slate-800
                    text-gray-700 dark:text-slate-300
                    border border-gray-200 dark:border-slate-700
                    hover:border-sky-300 dark:hover:border-sky-700
                    hover:text-sky-600 dark:hover:text-sky-400
                    transition-colors
                    text-sm font-medium
                  "
                >
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </>
  );
};
