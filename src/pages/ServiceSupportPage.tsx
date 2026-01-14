import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/ui/Hero';
import { Section, SectionTitle, AnimatedContainer, AnimatedItem } from '../components/ui/Section';
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FormField, FormSuccess } from '../components/ui/FormField';
import { 
  WrenchScrewdriverIcon, 
  CheckIcon, 
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon
} from '../components/ui/Icons';
import { serviceTypes, faqs } from '../data/resources';

// Service icons mapping
const serviceIcons = {
  wrench: WrenchScrewdriverIcon,
  cog: WrenchScrewdriverIcon,
  tool: WrenchScrewdriverIcon,
};

export const ServiceSupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentType: '',
    brand: '',
    serialNumber: '',
    location: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        equipmentType: '',
        brand: '',
        serialNumber: '',
        location: '',
        description: '',
      });
    }, 3000);
  };

  return (
    <>
      <Hero
        title="Service & Support"
        description="Comprehensive technical support, installation, training, and maintenance services for all your equipment needs."
        size="sm"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Service & Support' }]}
        centered
      />

      {/* Services Section */}
      <Section id="services" padding="lg">
        <SectionTitle
          center
          subtitle="Expert services to keep your equipment running at peak performance"
        >
          Our Services
        </SectionTitle>

        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTypes.map((service) => {
            const Icon = serviceIcons[service.iconType as keyof typeof serviceIcons];
            return (
              <AnimatedItem key={service.id}>
                <Card id={service.id} className="h-full scroll-mt-24">
                  <CardContent className="py-10">
                    <motion.div 
                      className="
                        w-20 h-20 mx-auto mb-6 rounded-2xl
                        bg-gradient-to-br from-sky-100 to-blue-100
                        dark:from-sky-900/50 dark:to-blue-900/50
                        flex items-center justify-center
                      "
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-10 h-10 text-sky-600 dark:text-sky-400" />
                    </motion.div>
                    <CardTitle className="text-xl text-center mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center mb-6">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-slate-300 text-sm">
                          <CheckIcon className="w-5 h-5 text-sky-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </Section>

      {/* Service Request Form */}
      <Section background="gray" id="request" padding="lg">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            center
            subtitle="Fill out the form below and our team will get back to you"
          >
            Request Service
          </SectionTitle>

          <Card variant="elevated">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <FormSuccess
                    title="Service Request Submitted!"
                    message="Thank you for your request. Our technical team will contact you within 24-48 hours."
                  />
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <FormField
                        label="Contact Name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+264 XX XXX XXXX"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Company/Institution"
                        name="company"
                        placeholder="Organization name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Equipment Type"
                        name="equipmentType"
                        type="select"
                        required
                        value={formData.equipmentType}
                        onChange={handleChange}
                        options={[
                          { value: 'medical', label: 'Medical Equipment' },
                          { value: 'laboratory', label: 'Laboratory Equipment' },
                          { value: 'educational', label: 'Educational Equipment' },
                          { value: 'other', label: 'Other' },
                        ]}
                      />
                      <FormField
                        label="Brand/Manufacturer"
                        name="brand"
                        placeholder="Equipment brand"
                        value={formData.brand}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Serial Number (if known)"
                        name="serialNumber"
                        placeholder="Serial number"
                        value={formData.serialNumber}
                        onChange={handleChange}
                      />
                      <FormField
                        label="Location"
                        name="location"
                        placeholder="Equipment location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <FormField
                      label="Description of Issue/Request"
                      name="description"
                      type="textarea"
                      placeholder="Please describe the issue or service you need..."
                      required
                      value={formData.description}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Attach Files (optional)"
                      name="files"
                      type="file"
                    />
                    <div className="mt-8">
                      <Button type="submit" size="lg">
                        Submit Service Request
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" padding="lg">
        <SectionTitle
          center
          subtitle="Common questions about our services"
        >
          Frequently Asked Questions
        </SectionTitle>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 dark:text-slate-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            For urgent technical support, call our helpline directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+264611234567"
              className="
                inline-flex items-center gap-3
                bg-white text-sky-600 
                px-6 py-3.5 rounded-xl 
                font-semibold text-lg
                hover:bg-gray-100 
                transition-colors
                shadow-lg
              "
            >
              <PhoneIcon className="w-5 h-5" />
              +264 61 123 4567
            </a>
            <span className="text-sky-200">or</span>
            <a
              href="mailto:support@medlabservices.com.na"
              className="
                inline-flex items-center gap-2
                text-white hover:text-sky-200 
                transition-colors
              "
            >
              <EnvelopeIcon className="w-5 h-5" />
              support@medlabservices.com.na
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
};
