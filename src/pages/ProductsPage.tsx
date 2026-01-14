import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription, CardBadge, CardImage } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  HeartPulseIcon, 
  BeakerIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  SearchIcon,
  CheckIcon
} from '../components/ui/Icons';
import { productCategories, mainCategories } from '../data/productCategories';
import medicalImg from '../assets/Product Pictures/medical.png';
import laboratoryImg from '../assets/Product Pictures/laboratory.jpg';
import educationalImg from '../assets/Product Pictures/educational.png';
import firstAidImg from '../assets/Product Pictures/first aid kit.jpg';

// Icon mapping
const categoryIcons = {
  medical: HeartPulseIcon,
  laboratory: BeakerIcon,
  educational: AcademicCapIcon,
  'first-aid': ShieldCheckIcon,
};

const categoryImages: Record<string, string> = {
  medical: medicalImg,
  laboratory: laboratoryImg,
  educational: educationalImg,
  'first-aid': firstAidImg,
};

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredCategories = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    let list = activeCategory === 'all'
      ? productCategories
      : productCategories.filter((cat) => cat.mainCategory === activeCategory);

    if (featuredOnly) {
      list = list.filter((cat) => cat.featured);
    }

    if (normalizedSearch) {
      list = list.filter((cat) => {
        const mainCatName = mainCategories.find((m) => m.id === cat.mainCategory)?.name ?? '';
        const text = [
          cat.name,
          cat.description,
          mainCatName,
          ...(cat.subcategories || []),
        ]
          .join(' ')
          .toLowerCase();
        return text.includes(normalizedSearch);
      });
    }

    return list;
  }, [activeCategory, featuredOnly, searchTerm]);

  const handleCategoryFilter = (categoryId: string) => {
    // Reset other filters when switching categories to ensure results show up
    setSearchTerm('');
    setFeaturedOnly(false);

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

      <Section padding="lg" className="bg-gradient-to-b from-white via-rose-50/60 to-white dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-950">
        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-10 justify-center"
        >
          <button
            type="button"
            className={`
              px-5 py-2.5 rounded-xl text-sm font-semibold
              transition-all duration-200
              ${activeCategory === 'all'
                ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/25 border border-red-100/70 dark:border-red-900/40'
                : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200 border border-red-100/70 dark:border-red-900/40 hover:bg-red-50 dark:hover:bg-red-900/20'
              }
            `}
            onClick={() => handleCategoryFilter('all')}
          >
            All Products
          </button>
          {mainCategories.map((cat) => {
            const Icon = categoryIcons[cat.iconType as keyof typeof categoryIcons];
            return (
              <button
                type="button"
                key={cat.id}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200
                  ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/25 border border-red-100/70 dark:border-red-900/40'
                    : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200 border border-red-100/70 dark:border-red-900/40 hover:bg-red-50 dark:hover:bg-red-900/20'
                  }
                `}
                onClick={() => handleCategoryFilter(cat.id)}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </motion.div>

        {/* Search + filter controls */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500/40">
            <SearchIcon className="w-5 h-5 text-red-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, description, or subcategory"
              className="w-full bg-transparent text-sm md:text-base text-gray-800 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={() => setFeaturedOnly((prev) => !prev)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                ${featuredOnly
                  ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/25 border border-red-100/70 dark:border-red-900/40'
                  : 'bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-200 border border-red-100/70 dark:border-red-900/40 hover:bg-red-50 dark:hover:bg-red-900/20'
                }
              `}
            >
              <CheckIcon className="w-4 h-4" />
              Featured only
            </button>

            {(searchTerm || featuredOnly || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFeaturedOnly(false);
                  handleCategoryFilter('all');
                }}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-red-700 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        <SectionTitle
          center
          subtitle={`${filteredCategories.length} categories available`}
        >
          {activeCategory === 'all'
            ? 'All Product Categories'
            : mainCategories.find((c) => c.id === activeCategory)?.name || 'Products'}
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const mainCat = mainCategories.find(m => m.id === category.mainCategory);
            const Icon = mainCat ? categoryIcons[mainCat.iconType as keyof typeof categoryIcons] : BeakerIcon;
            
            return (
              <AnimatedItem key={category.id}>
                <Link to={`/products/${category.slug}`}>
                  <Card
                    hover
                    className="h-full group border border-red-100/60 dark:border-red-900/40 shadow-[0_15px_40px_-22px_rgba(220,38,38,0.45)]"
                  >
                    <div className="relative group">
                      <CardImage
                        key={`${category.id}-${activeCategory}`}
                        src={categoryImages[category.mainCategory] || medicalImg}
                        alt={mainCat?.name || 'Product category'}
                        aspectRatio="wide"
                        className="h-44"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Icon className="w-4 h-4" />
                          <span>{mainCat?.name}</span>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 opacity-80" />
                      </div>
                    </div>
                    <CardContent>
                      <CardBadge className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-rose-200">{mainCat?.name}</CardBadge>
                      <CardTitle className="mt-2 text-gray-900 dark:text-white">{category.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {category.description}
                      </CardDescription>
                      
                      {category.subcategories && category.subcategories.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {category.subcategories.slice(0, 2).map((sub) => (
                            <span
                              key={sub}
                              className="text-xs bg-rose-50 text-rose-700 dark:bg-red-900/40 dark:text-rose-200 px-2.5 py-1 rounded-lg border border-red-100/70 dark:border-red-800/60"
                            >
                              {sub}
                            </span>
                          ))}
                          {category.subcategories.length > 2 && (
                            <span className="text-xs text-rose-700 dark:text-rose-200 px-2 py-1">
                              +{category.subcategories.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-rose-300 font-semibold text-sm">
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
      <Section background="gradient" padding="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.45)]">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-rose-50/80">Get in touch!</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-rose-50/90 text-lg md:text-xl max-w-2xl">
                  We source a wide range of products from our global partners. Tell us what you need and we'll help you find the right solution.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button 
                  as="link" 
                  to="/contact" 
                  size="lg" 
                  className="w-full lg:w-auto bg-red-600 text-white border-2 border-red-200/70 shadow-[0_15px_40px_-18px_rgba(220,38,38,0.65)] hover:-translate-y-0.5 hover:bg-red-500 font-semibold transition-all duration-200"
                >
                  Contact Us
                </Button>
                <Button 
                  as="link" 
                  to="/contact" 
                  variant="outline" 
                  size="lg" 
                  className="w-full lg:w-auto text-white border-2 border-white/60 hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

