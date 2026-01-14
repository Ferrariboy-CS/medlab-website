import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BeakerIcon, BuildingOfficeIcon, BuildingLibraryIcon, BriefcaseIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem, StatItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { getCategoryIcon } from '../components/icons/CategoryIcons';
import { mainCategories } from '../data/productCategories';
import { sectors } from '../data/sectors';
import { companyStats } from '../data/resources';
import { clients } from '../data/clients';
import heroBg from '../assets/medlab-building.jpg';
import facilityImg from '../assets/medlab.jpg';
import { setPageMeta } from '../utils/seo';

export const HomePage: React.FC = () => {
  useEffect(() => {
    setPageMeta({
      title: 'MedLab Services Namibia | Medical & Laboratory Solutions',
      description:
        'MedLab Services delivers trusted medical, laboratory, educational, and first aid equipment across Namibia with expert support.',
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Trusted Medical & Laboratory Solutions for Namibia Since 1986"
        description="Supplying hospitals, laboratories, educational institutions, and industry with quality medical equipment, laboratory instruments, and first aid supplies."
        primaryCta={{ label: 'View Products', to: '/products' }}
        secondaryCta={{ label: 'Contact', to: '/contact' }}
        backgroundImage={heroBg}
        overlay
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
                  <Card hover className="h-full text-center group border border-red-100/70 dark:border-red-900/40">
                    <CardContent className="py-8">
                      <motion.div
                        className="
                          w-20 h-20 mx-auto mb-4 rounded-2xl
                          bg-gradient-to-br from-rose-50 to-red-100
                          dark:from-red-900/40 dark:to-rose-900/30
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300
                        "
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-red-600 dark:text-red-200">
                          {IconComponent}
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                      <div className="mt-4 flex items-center justify-center gap-2 text-red-600 dark:text-red-200 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
                <Link to={`/products`}>
                  <Card hover className="h-full border border-red-100/70 dark:border-red-900/40 hover:shadow-[0_18px_30px_-20px_rgba(220,38,38,0.45)] transition-shadow">
                    <CardContent className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 dark:from-red-500 dark:to-rose-400 flex items-center justify-center text-white shadow-lg shadow-red-200/70 dark:shadow-red-900/40">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-3">
                        <CardTitle className="text-lg text-gray-900 dark:text-white">{sector.name}</CardTitle>
                        <CardDescription className="text-gray-700 dark:text-gray-200">{sector.shortDescription}</CardDescription>
                        <ul className="space-y-1.5">
                          {sector.offerings.slice(0, 3).map((offering, index) => (
                            <li key={index} className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              {offering}
                            </li>
                          ))}
                        </ul>
                        <Button
                          as="span"
                          variant="ghost"
                          size="sm"
                          className="text-red-600 dark:text-red-200 hover:bg-red-50 dark:hover:bg-red-900/30 group"
                          icon={<ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                          iconPosition="right"
                        >
                          Learn more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Facility Highlight */}
      <Section background="gray" pattern className="relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-red-100/60 dark:shadow-red-900/40 border border-red-100/60 dark:border-red-900/40 group transition-transform duration-300 hover:-translate-y-1 h-[280px] md:h-[340px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <img
              src={facilityImg}
              alt="MedLab facility"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-rose-100">On-site training</p>
                <p className="text-lg font-semibold">Hands-on demos in our lab showroom</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold border border-white/30 animate-pulse">Visit us</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-red-600 dark:text-red-200">Experience the difference</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">See our equipment, meet our technicians, and plan your next project.</h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">Walk through real setups, compare options side by side, and get practical guidance from our specialists before you purchase.</p>
            <div className="flex flex-wrap gap-3">
              {[ 'Live demos', 'Calibration & QC', 'Project scoping', 'After-sales support' ].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-red-100/70 dark:border-red-900/40 text-sm font-semibold text-red-600 dark:text-red-200 shadow-sm shadow-red-100/50">{tag}</span>
              ))}
            </div>
            <Button as="link" to="/contact" size="lg" className="bg-red-600 text-white border-2 border-red-200/70 shadow-[0_15px_40px_-18px_rgba(220,38,38,0.65)] hover:-translate-y-0.5 hover:bg-red-500 transition-all duration-200" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Book a visit
            </Button>
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section background="gray">
        <SectionTitle center subtitle="Trusted by leading institutions across Namibia">
          Our Clients & Partners
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {clients.map((client) => (
            <AnimatedItem key={client.name}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-slate-700">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Section>

     

      {/* CTA Section */}
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
                  Need a quotation or technical advice?
                </h2>
                <p className="text-rose-50/90 text-lg md:text-xl max-w-2xl">
                  Our specialists will help you choose the right equipment and support services for your team.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button 
                  as="link" 
                  to="/contact" 
                  size="lg" 
                  className="w-full lg:w-auto bg-red-600 text-white border-2 border-red-200/70 shadow-[0_15px_40px_-18px_rgba(220,38,38,0.65)] hover:-translate-y-0.5 hover:bg-red-500 font-semibold transition-all duration-200"
                >
                  Request a quote
                </Button>
                <Button 
                  as="link" 
                  to="/contact" 
                  variant="outline" 
                  size="lg" 
                  className="w-full lg:w-auto bg-red-600 text-white border-2 border-red-200/70 hover:bg-red-500 hover:-translate-y-0.5 font-semibold shadow-[0_15px_40px_-18px_rgba(220,38,38,0.65)] transition-all duration-200"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};
