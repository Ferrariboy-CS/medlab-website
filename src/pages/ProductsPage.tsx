import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription, CardBadge, CardPlaceholder } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { productCategories, mainCategories } from '../data/productCategories';
import { products, Product } from '../data/products';
import { useQuote } from '../contexts';
import { getCategoryIcon } from '../components/icons/CategoryIcons';
import { setPageMeta } from '../utils/seo';

const categoryBySlug = new Map(productCategories.map((category) => [category.slug, category]));
const mainCategoryById = new Map(mainCategories.map((category) => [category.id, category]));

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [data, setData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<'name-asc'>('name-asc');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem, items, setIsOpen } = useQuote();

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    setPageMeta({
      title: 'Products | MedLab Services Namibia',
      description:
        'Browse MedLab medical, laboratory, educational, and first aid products. Search, filter, and request a quote with ease.',
    });
  }, []);

  const loadProducts = () => {
    setStatus('loading');
    setSelectedProduct(null);

    window.setTimeout(() => {
      try {
        setData(products);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    }, 400);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (status !== 'success') return [];

    const filtered = data.filter((product) => {
      const categoryInfo = categoryBySlug.get(product.categorySlug);
      const mainCategory = categoryInfo ? mainCategoryById.get(categoryInfo.mainCategory) : null;
      const matchesCategory =
        activeCategory === 'all' || mainCategory?.id === activeCategory || categoryInfo?.slug === activeCategory;
      const matchesSearch =
        normalizedSearch === '' ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    if (sortOption === 'name-asc') {
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [activeCategory, data, normalizedSearch, sortOption, status]);

  const handleCategoryChange = (value: string) => {
    if (value === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  const requestSummary = items.map((item) => `${item.product.name} (x${item.quantity})`).join(', ');

  return (
    <>
      <Hero
        title="Products"
        description="Search, filter, and request MedLab's trusted medical, laboratory, educational, and safety equipment."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        centered
      />

      <Section padding="lg" className="bg-gradient-to-b from-white via-rose-50/70 to-white dark:from-slate-950 dark:via-slate-950/70 dark:to-slate-950">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center mb-10">
          <div>
            <SectionTitle subtitle="Find what you need, then add items to your request list." className="mb-6">
              Browse our product catalogue
            </SectionTitle>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500/40">
                <MagnifyingGlassIcon className="w-5 h-5 text-red-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name or description"
                  className="w-full bg-transparent text-sm md:text-base text-gray-800 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="appearance-none w-full min-w-[220px] bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/40"
                >
                  <option value="all">All categories</option>
                  {mainCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-4 h-4 text-red-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as 'name-asc')}
                  className="appearance-none w-full min-w-[200px] bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/40"
                >
                  <option value="name-asc">Sort: Name (A–Z)</option>
                </select>
                <ChevronDownIcon className="w-4 h-4 text-red-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {(searchTerm || activeCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    handleCategoryChange('all');
                  }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-red-700 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 rounded-2xl p-4 shadow-sm space-y-3">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Request summary</p>
            <p className="text-xs text-gray-600 dark:text-slate-300">
              {items.length > 0 ? requestSummary : 'No items yet. Add products to request a quote.'}
            </p>
            <Button size="sm" onClick={() => setIsOpen(true)} className="w-full">
              View request list ({items.length})
            </Button>
          </div>
        </div>

        {status === 'loading' && (
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 text-sm font-semibold text-red-600 dark:text-red-200 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              Loading products...
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-slate-300 mb-4">Unable to load products right now.</p>
            <Button onClick={loadProducts}>Retry</Button>
          </div>
        )}

        {status === 'success' && (
          <>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-gray-500 dark:text-slate-400 mb-6">
              Showing {filteredProducts.length} of {data.length} products
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => {
                  const categoryInfo = categoryBySlug.get(product.categorySlug);
                  const mainCategory = categoryInfo ? mainCategoryById.get(categoryInfo.mainCategory) : null;
                  const IconComponent = mainCategory ? getCategoryIcon(mainCategory.iconType, 'w-10 h-10') : null;

                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Card className="h-full flex flex-col" hover>
                        <CardPlaceholder
                          icon={IconComponent}
                          label={categoryInfo?.name}
                          className="h-40"
                        />
                        <CardContent className="flex-1 flex flex-col">
                          {mainCategory && (
                            <CardBadge className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-rose-200">
                              {mainCategory.name}
                            </CardBadge>
                          )}
                          <CardTitle className="mt-2">{product.name}</CardTitle>
                          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                          {product.turnaroundTime && (
                            <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">Turnaround: {product.turnaroundTime}</p>
                          )}
                          <div className="mt-4 flex flex-col gap-2">
                            <Button size="sm" onClick={() => setSelectedProduct(product)} variant="outline">
                              View details
                            </Button>
                            <Button size="sm" onClick={() => addItem(product)}>
                              Add to Request
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 dark:text-slate-300 mb-4">No products match your search.</p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    handleCategoryChange('all');
                  }}
                  variant="outline"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </>
        )}
      </Section>

      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-x-0 top-24 mx-auto max-w-2xl z-50 px-4"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-red-100/70 dark:border-red-900/40 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-red-100/70 dark:border-red-900/40">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-red-500">Product details</p>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedProduct.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/40 transition"
                    aria-label="Close"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 dark:text-slate-200">{selectedProduct.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-600 dark:text-slate-300">
                    <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-900/30 border border-red-100/70 dark:border-red-900/40">
                      <span className="block text-xs uppercase tracking-[0.2em] text-red-500">Category</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {categoryBySlug.get(selectedProduct.categorySlug)?.name || 'General'}
                      </span>
                    </div>
                    {selectedProduct.brand && (
                      <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-900/30 border border-red-100/70 dark:border-red-900/40">
                        <span className="block text-xs uppercase tracking-[0.2em] text-red-500">Brand</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{selectedProduct.brand}</span>
                      </div>
                    )}
                    {selectedProduct.turnaroundTime && (
                      <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-900/30 border border-red-100/70 dark:border-red-900/40">
                        <span className="block text-xs uppercase tracking-[0.2em] text-red-500">Lead Time</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{selectedProduct.turnaroundTime}</span>
                      </div>
                    )}
                    {selectedProduct.price && (
                      <div className="p-3 rounded-xl bg-red-50/60 dark:bg-red-900/30 border border-red-100/70 dark:border-red-900/40">
                        <span className="block text-xs uppercase tracking-[0.2em] text-red-500">Price</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{selectedProduct.price}</span>
                      </div>
                    )}
                  </div>
                  {selectedProduct.features && selectedProduct.features.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights</p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="px-6 py-5 border-t border-red-100/70 dark:border-red-900/40 bg-rose-50/60 dark:bg-slate-900">
                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                      Close
                    </Button>
                    <Button onClick={() => addItem(selectedProduct)}>Add to Request</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
