import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  HospitalIcon, 
  MicroscopeIcon, 
  AcademicCapIcon, 
  IndustryIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeIcon,
  WrenchScrewdriverIcon,
  TruckIcon
} from '../components/ui/Icons';
import { sectors } from '../data/sectors';
import { productCategories } from '../data/productCategories';

// Icon mapping for sectors
const sectorIcons = {
  hospital: HospitalIcon,
  laboratory: MicroscopeIcon,
  education: AcademicCapIcon,
  industry: IndustryIcon,
};

export const SolutionsPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Industry Solutions"
        description="Tailored medical and laboratory solutions for every sector. Discover how Medlab serves your industry with specialized products and expertise."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
        centered
      />

      <Section padding="lg">
        <SectionTitle
          center
          subtitle="We understand the unique needs of each sector and provide customized solutions"
        >
          Sectors We Serve
        </SectionTitle>

        <div className="space-y-20">
          {sectors.map((sector, index) => {
            const Icon = sectorIcons[sector.iconType];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={sector.id}
                id={sector.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`
                  flex flex-col gap-10 items-center scroll-mt-24
                  ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2">
                  <motion.div 
                    className="
                      aspect-[4/3] rounded-3xl overflow-hidden
                      bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100
                      dark:from-sky-950 dark:via-blue-950 dark:to-indigo-950
                      flex items-center justify-center
                      relative
                    "
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 pattern-medical opacity-50" />
                    
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <Icon className="w-32 h-32 text-sky-500 dark:text-sky-400" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="
                      w-12 h-12 rounded-xl
                      bg-sky-100 dark:bg-sky-900/50
                      flex items-center justify-center
                    ">
                      <Icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {sector.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                    {sector.description}
                  </p>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-sky-500 rounded-full" />
                    What We Offer
                  </h4>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sector.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-slate-300">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckIcon className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{offering}</span>
                        </motion.div>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Related Products
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {sector.relatedCategories.slice(0, 4).map((catSlug) => {
                      const cat = productCategories.find((c) => c.slug === catSlug);
                      if (!cat) return null;
                      return (
                        <Link
                          key={catSlug}
                          to={`/products/${catSlug}`}
                          className="
                            text-sm px-4 py-2 rounded-xl
                            bg-sky-50 dark:bg-sky-950/50
                            text-sky-700 dark:text-sky-300
                            hover:bg-sky-100 dark:hover:bg-sky-900/50
                            transition-colors font-medium
                          "
                        >
                          {cat.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button as="link" to="/products">
                      Browse Products
                    </Button>
                    <Button as="link" to="/contact" variant="outline">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Why Choose Medlab */}
      <Section background="gray" padding="lg">
        <SectionTitle center subtitle="What sets us apart">
          Why Choose Medlab?
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: StarIcon,
              title: 'Industry Expertise',
              description: 'Over 35 years of experience serving Namibian healthcare and industry.',
            },
            {
              icon: GlobeIcon,
              title: 'Global Partnerships',
              description: 'Representing leading international brands with local support.',
            },
            {
              icon: WrenchScrewdriverIcon,
              title: 'Technical Support',
              description: 'Expert installation, training, and maintenance services.',
            },
            {
              icon: TruckIcon,
              title: 'Complete Solutions',
              description: 'From equipment to consumables, we cover all your needs.',
            },
          ].map((item) => (
            <AnimatedItem key={item.title}>
              <Card className="h-full">
                <CardContent className="text-center py-10">
                  <motion.div 
                    className="
                      w-16 h-16 mx-auto mb-5 rounded-2xl
                      bg-gradient-to-br from-sky-100 to-blue-100
                      dark:from-sky-900/50 dark:to-blue-900/50
                      flex items-center justify-center
                    "
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </motion.div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-sky-100 text-lg md:text-xl mb-10">
            Our team of specialists can help you find the right solutions for your sector.
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as="link" 
              to="/contact" 
              size="lg" 
              className="bg-white text-sky-600 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
            <Button 
              as="link" 
              to="/products" 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Browse Products
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};
