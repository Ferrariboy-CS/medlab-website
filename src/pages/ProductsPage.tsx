import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription, CardPlaceholder, CardBadge } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  HeartPulseIcon, 
  BeakerIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon,
  ArrowRightIcon
} from '../components/ui/Icons';
import { productCategories, mainCategories } from '../data/productCategories';

// Icon mapping
const categoryIcons = {
  medical: HeartPulseIcon,
  laboratory: BeakerIcon,
  educational: AcademicCapIcon,
  'first-aid': ShieldCheckIcon,
};

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') return productCategories;
    return productCategories.filter((cat) => cat.mainCategory === activeCategory);
  }, [activeCategory]);

  const handleCategoryFilter = (categoryId: string) => {
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <>
      <Hero
        title="Our Products"
        description="Explore our comprehensive range of medical, laboratory, educational, and first aid equipment from leading global manufacturers."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        centered
      />

      <Section padding="lg">
        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-10 justify-center"
        >
          <button
            onClick={() => handleCategoryFilter('all')}
            className={`
              px-5 py-2.5 rounded-xl text-sm font-semibold
              transition-all duration-200
              ${activeCategory === 'all'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }
            `}
          >
            All Products
          </button>
          {mainCategories.map((cat) => {
            const Icon = categoryIcons[cat.iconType as keyof typeof categoryIcons];
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryFilter(cat.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200
                  ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        <SectionTitle
          center
          subtitle={`${filteredCategories.length} categories available`}
        >
          {activeCategory === 'all'
            ? 'All Product Categories'
            : mainCategories.find((c) => c.id === activeCategory)?.name || 'Products'}
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => {
            const mainCat = mainCategories.find(m => m.id === category.mainCategory);
            const Icon = mainCat ? categoryIcons[mainCat.iconType as keyof typeof categoryIcons] : BeakerIcon;
            
            return (
              <AnimatedItem key={category.id}>
                <Link to={`/products/${category.slug}`}>
                  <Card hover className="h-full group">
                    <CardPlaceholder 
                      icon={<Icon className="w-12 h-12" />}
                      label={mainCat?.name}
                      className="h-44"
                    />
                    <CardContent>
                      <CardBadge variant="primary">{mainCat?.name}</CardBadge>
                      <CardTitle className="mt-2">{category.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {category.description}
                      </CardDescription>
                      
                      {category.subcategories && category.subcategories.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {category.subcategories.slice(0, 2).map((sub) => (
                            <span
                              key={sub}
                              className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded-lg"
                            >
                              {sub}
                            </span>
                          ))}
                          {category.subcategories.length > 2 && (
                            <span className="text-xs text-gray-500 dark:text-slate-400 px-2 py-1">
                              +{category.subcategories.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-4 flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium text-sm">
                        <span>View Category</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* CTA */}
      <Section background="blue" padding="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mb-8">
            We source a wide range of products from our global partners. Contact us with your
            requirements and we'll help you find the right solution.
          </p>
          <Button as="link" to="/contact">
            Contact Us
          </Button>
        </motion.div>
      </Section>
    </>
  );
};

