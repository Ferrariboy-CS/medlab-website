import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  StarIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon, 
  HeartPulseIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  ClipboardIcon,
  ArrowRightIcon,
  BuildingOfficeIcon
} from '../components/ui/Icons';
import { partners, companyValues, departments, companyTimeline } from '../data/resources';

// Icons for departments
const departmentIcons = {
  medical: HeartPulseIcon,
  laboratory: BeakerIcon,
  education: AcademicCapIcon,
  'first-aid': ShieldCheckIcon,
  wrench: WrenchScrewdriverIcon,
  clipboard: ClipboardIcon,
};

// Icons for values
const valueIcons = {
  star: StarIcon,
  shield: ShieldCheckIcon,
  academic: AcademicCapIcon,
  heart: HeartPulseIcon,
};

export const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="About Medlab Services"
        description="Trusted medical and laboratory solutions for Namibia since 1986. Learn about our history, mission, and the team behind our success."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        centered
      />

      {/* Introduction */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Your Partner in{' '}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Medlab Services has been at the forefront of medical and laboratory equipment supply 
                in Namibia for over 35 years. Founded in 1986, we have grown from a small local 
                supplier to become the trusted partner for hospitals, laboratories, educational 
                institutions, and industries across the nation.
              </p>
              <p>
                We represent leading international brands and provide comprehensive solutions that 
                include not just equipment, but also installation, training, maintenance, and 
                ongoing technical support.
              </p>
              <p>
                Our mission is simple: to provide quality medical and laboratory products and 
                services that contribute to better healthcare outcomes for all Namibians.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="
              aspect-square rounded-3xl overflow-hidden
              bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100
              dark:from-sky-950 dark:via-blue-950 dark:to-indigo-950
              flex items-center justify-center
              relative
            ">
              <div className="absolute inset-0 pattern-medical opacity-30" />
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BuildingOfficeIcon className="w-40 h-40 text-sky-500 dark:text-sky-400" />
              </motion.div>
            </div>
            
            {/* Floating stats */}
            <motion.div 
              className="
                absolute -bottom-6 -left-6
                bg-white dark:bg-slate-800
                rounded-2xl shadow-xl p-4
                border border-gray-100 dark:border-slate-700
              "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">35+</div>
              <div className="text-sm text-gray-600 dark:text-slate-300">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="
                absolute -top-6 -right-6
                bg-white dark:bg-slate-800
                rounded-2xl shadow-xl p-4
                border border-gray-100 dark:border-slate-700
              "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-slate-300">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gray" padding="lg">
        <SectionTitle center subtitle="Our journey over the years">
          Our History
        </SectionTitle>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-200 dark:bg-sky-900 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {companyTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <motion.div 
                    className="
                      absolute left-4 md:left-1/2 
                      w-4 h-4 bg-sky-500 rounded-full 
                      transform -translate-x-1/2 z-10
                      ring-4 ring-white dark:ring-slate-800
                    "
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  />

                  {/* Content */}
                  <div className={`
                    ml-12 md:ml-0 md:w-1/2 
                    ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}
                  `}>
                    <Card>
                      <CardContent className="py-4">
                        <span className="text-sky-600 dark:text-sky-400 font-bold text-xl">
                          {item.year}
                        </span>
                        <p className="text-gray-700 dark:text-slate-300 mt-1">
                          {item.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section padding="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To be Namibia's leading supplier of quality medical, laboratory, and educational 
            equipment, delivering exceptional products and services that contribute to improved 
            healthcare, education, and workplace safety.
          </p>
        </motion.div>

        <SectionTitle center subtitle="The principles that guide everything we do">
          Our Values
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((value, index) => {
            const Icon = valueIcons[value.iconType as keyof typeof valueIcons];
            return (
              <AnimatedItem key={value.title}>
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
                      <Icon className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </motion.div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="mt-2">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Departments */}
      <Section background="gray" padding="lg">
        <SectionTitle center subtitle="Specialized teams to serve your needs">
          Our Departments
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = departmentIcons[dept.iconType as keyof typeof departmentIcons];
            return (
              <AnimatedItem key={dept.name}>
                <Card className="h-full">
                  <CardContent className="flex items-start gap-4">
                    <div className="
                      w-14 h-14 rounded-xl flex-shrink-0
                      bg-gradient-to-br from-sky-100 to-blue-100
                      dark:from-sky-900/50 dark:to-blue-900/50
                      flex items-center justify-center
                    ">
                      <Icon className="w-7 h-7 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <CardTitle>{dept.name}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Partners */}
      <Section padding="lg">
        <SectionTitle center subtitle="We proudly represent leading global brands">
          Our Partners & Customers
        </SectionTitle>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-gray-50 dark:bg-slate-800 
                rounded-xl p-4 h-20
                flex items-center justify-center
                border border-gray-100 dark:border-slate-700
                transition-all duration-200
              "
            >
              <span className="text-gray-600 dark:text-slate-300 text-sm font-semibold text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sky-50 dark:bg-sky-950/30 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Institutions
          </h3>
          <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            We are proud to serve government hospitals, private clinics, universities, 
            research institutions, mining companies, and industries across Namibia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Ministry of Health',
              'University of Namibia',
              'Private Hospitals',
              'NamWater',
              'Mining Companies',
              'NGO Health Programs',
            ].map((client) => (
              <span 
                key={client} 
                className="
                  bg-white dark:bg-slate-800 
                  px-4 py-2 rounded-xl
                  text-sm font-medium text-gray-700 dark:text-slate-300
                  border border-gray-100 dark:border-slate-700
                "
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
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
            Ready to Work With Us?
          </h2>
          <p className="text-sky-100 text-lg md:text-xl mb-10">
            Whether you need equipment, supplies, or technical support, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as="link" 
              to="/contact" 
              size="lg" 
              className="bg-white text-sky-600 hover:bg-gray-100"
            >
              Contact Us
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

