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
  HeartPulseIcon
} from '../components/ui/Icons';
import { companyValues } from '../data/resources';
import { clients } from '../data/clients';
import buildingImage from '../assets/medlab-building.jpg';

const teamMembers = [
  {
    name: 'Melissa Hartung',
    title: 'Product Specialist',
    department: 'Medical Department',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    phone: '+264 (0)61 237076',
    fax: '+264 (0)61 223949',
  },
  {
    name: 'Chad Wright',
    title: 'Product Specialist',
    department: 'Medical Department',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
    phone: '+264 (0)61 237076',
    fax: '+264 (0)61 223949',
  },
  {
    name: 'Angela Schaeffler',
    title: 'Product Specialist',
    department: 'Laboratory & Educational Department',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80&sat=-40',
    phone: '+264 (0)61 237076',
    fax: '+264 (0)61 223949',
  },
  {
    name: 'Frank Platt',
    title: 'Product Specialist',
    department: 'Laboratory & Educational Department',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
    phone: '+264 (0)61 237076',
    fax: '+264 (0)61 223949',
  },
];

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
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
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
              w-full max-w-xl mx-auto aspect-[16/7]
              rounded-3xl overflow-hidden
              relative shadow-2xl
            ">
              <img
                src={buildingImage}
                alt="Medlab Services building in Windhoek"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
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
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">35+</div>
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

      {/* Company Profile */}
      <Section background="gray" padding="lg">
        <SectionTitle center subtitle="A trusted partner since 1986">
          Medlab Services cc – Company Profile
        </SectionTitle>
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="space-y-4 text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Medlab Services cc was established in April 1986 and has since been supplying medical, anatomical, optical, histology and laboratory equipment. The company operates from its own premises at 43 Marconi Street, Windhoek, Namibia.
              </p>
              <p>
                We supply, sell, and service medical and laboratory equipment throughout Namibia. Our sales team includes qualified Medical Technologists, and our service engineers hold diplomas in Electronics. This blend of expertise ensures strong technical support and reliable after-sales service for every client.
              </p>
              <p>
                Medlab Services cc collaborates with leading international brands to deliver high-quality equipment. Our goal is to empower laboratories and manufacturers to make accurate diagnostic decisions with dependable tools and support.
              </p>
            </CardContent>
          </Card>
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
          {companyValues.map((value) => {
            const Icon = valueIcons[value.iconType as keyof typeof valueIcons];
            return (
              <AnimatedItem key={value.title}>
                <Card className="h-full">
                  <CardContent className="text-center py-10">
                    <motion.div 
                      className="
                        w-16 h-16 mx-auto mb-5 rounded-2xl
                        bg-gradient-to-br from-red-50 to-rose-100
                        dark:from-red-900/50 dark:to-rose-900/50
                        flex items-center justify-center
                      "
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-red-600 dark:text-red-400" />
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

      {/* Team */}
      <Section padding="lg" background="gray">
        <SectionTitle center subtitle="Key Contacts">
          Meet Our Team
        </SectionTitle>
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <AnimatedItem key={member.name}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md ring-2 ring-red-100 dark:ring-red-900/40 flex-shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{member.name}</div>
                          <div className="text-sm italic text-gray-600 dark:text-slate-300">{member.title}</div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200">
                          {member.department}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-700 dark:text-slate-300">
                        <div>Tel. {member.phone}</div>
                        <div>Fax. {member.fax}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-white dark:bg-slate-800 
                rounded-xl p-4 h-24
                flex items-center justify-center
                border border-gray-100 dark:border-slate-700
                shadow-sm hover:shadow-md
                transition-all duration-200
              "
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-14 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

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
                  Ready to work with us?
                </h2>
                <p className="text-rose-50/90 text-lg md:text-xl max-w-2xl">
                  Whether you need equipment, supplies, or technical support, our specialists are here to guide you from selection to ongoing service.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button 
                  as="link" 
                  to="/contact" 
                  size="lg" 
                  className="w-full lg:w-auto bg-red-600 text-white border-2 border-red-200/70 shadow-[0_15px_40px_-18px_rgba(220,38,38,0.65)] hover:-translate-y-0.5 hover:bg-red-500 font-semibold transition-all duration-200"
                >
                  Talk to our team
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

