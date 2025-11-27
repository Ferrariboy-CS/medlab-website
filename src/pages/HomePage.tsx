import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  BeakerIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem, StatItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription, CardPlaceholder } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { getCategoryIcon } from '../components/icons/CategoryIcons';
import { mainCategories, productCategories } from '../data/productCategories';
import { sectors, whoWeServe } from '../data/sectors';
import { resources, companyStats, partners } from '../data/resources';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Trusted Medical & Laboratory Solutions for Namibia Since 1986"
        description="Supplying hospitals, laboratories, educational institutions, and industry with quality medical equipment, laboratory instruments, and first aid supplies."
        primaryCta={{ label: 'Browse Products', to: '/products' }}
        secondaryCta={{ label: 'Request a Quote', to: '/contact' }}
        size="lg"
      />

      {/* Main Category Cards */}
      <Section background="gray">
        <SectionTitle center subtitle="Everything you need for healthcare, laboratories, education, and workplace safety">
          Our Product Categories
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((category) => {
            const IconComponent = getCategoryIcon(category.iconType, 'w-10 h-10');
            return (
              <AnimatedItem key={category.id}>
                <Link to={`/products?category=${category.id}`}>
                  <Card hover className="h-full text-center group">
                    <CardContent className="py-8">
                      <motion.div
                        className="
                          w-20 h-20 mx-auto mb-4 rounded-2xl
                          bg-gradient-to-br from-sky-100 to-blue-100
                          dark:from-sky-900/50 dark:to-blue-900/50
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                        "
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-sky-600 dark:text-sky-400">
                          {IconComponent}
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                      <div className="mt-4 flex items-center justify-center gap-2 text-sky-600 dark:text-sky-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Who We Serve */}
      <Section>
        <SectionTitle center subtitle="Trusted by leading institutions across Namibia">
          Who We Serve
        </SectionTitle>
        <AnimatedContainer className="flex flex-wrap justify-center gap-6 md:gap-12">
          {whoWeServe.map((item) => {
            const icons: Record<string, React.ComponentType<{ className?: string }>> = {
              hospital: BuildingOfficeIcon,
              laboratory: BeakerIcon,
              education: BuildingLibraryIcon,
              industry: BriefcaseIcon,
            };
            const Icon = icons[item.iconType] || BuildingOfficeIcon;
            return (
              <AnimatedItem key={item.name}>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center mb-2">
                    <Icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Featured Product Categories */}
      <Section background="gray">
        <SectionTitle center subtitle="Browse our wide range of products">
          Featured Categories
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.slice(0, 6).map((category) => (
            <AnimatedItem key={category.id}>
              <Link to={`/products/${category.slug}`}>
                <Card hover className="h-full">
                  <CardPlaceholder
                    icon={<BeakerIcon className="w-12 h-12" />}
                    label={category.name}
                    className="h-48"
                  />
                  <CardContent>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-sky-600 dark:text-sky-400 font-medium text-sm hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 group">
                        View Category
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
        <div className="text-center mt-8">
          <Button as="link" to="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gradient">
        <AnimatedContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {companyStats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              light
            />
          ))}
        </AnimatedContainer>
      </Section>

      {/* Solutions/Sectors Preview */}
      <Section>
        <SectionTitle center subtitle="Tailored solutions for your industry">
          Industry Solutions
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector) => {
            const icons: Record<string, React.ComponentType<{ className?: string }>> = {
              hospital: BuildingOfficeIcon,
              laboratory: BeakerIcon,
              education: BuildingLibraryIcon,
              industry: BriefcaseIcon,
            };
            const Icon = icons[sector.id] || BuildingOfficeIcon;
            return (
              <AnimatedItem key={sector.id}>
                <Link to={`/solutions#${sector.slug}`}>
                  <Card hover className="h-full">
                    <CardContent className="flex items-start gap-4">
                      <div className="text-sky-600 dark:text-sky-400 flex-shrink-0">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div>
                        <CardTitle>{sector.name}</CardTitle>
                        <CardDescription>{sector.shortDescription}</CardDescription>
                        <ul className="mt-3 space-y-1">
                          {sector.offerings.slice(0, 3).map((offering, index) => (
                            <li key={index} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                              {offering}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-block mt-3 text-sky-600 dark:text-sky-400 font-medium text-sm flex items-center gap-1 group">
                          Learn more
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Partners */}
      <Section background="gray">
        <SectionTitle center subtitle="We represent leading global brands">
          Our Partners
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {partners.map((partner) => (
            <AnimatedItem key={partner.name}>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium text-center">{partner.name}</span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Section>

      {/* Resources Section */}
      <Section id="resources">
        <SectionTitle center subtitle="Download our catalogues and product guides">
          Resources & Downloads
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.slice(0, 3).map((resource) => (
            <AnimatedItem key={resource.id}>
              <Card hover>
                <CardPlaceholder
                  icon={<BeakerIcon className="w-16 h-16" />}
                  className="h-40"
                />
                <CardContent>
                  <span className="text-xs font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                    {resource.type}
                  </span>
                  <CardTitle className="mt-1">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="mt-3 -ml-2">
                    Download PDF →
                  </Button>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Need a Quotation or Technical Advice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sky-100 text-lg mb-8"
          >
            Our team of experts is ready to help you find the right solutions for your needs.
            Contact us today for a free consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button as="link" to="/contact" size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Request a Quote
            </Button>
            <Button as="link" to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
